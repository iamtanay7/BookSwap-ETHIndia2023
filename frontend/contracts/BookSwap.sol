// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookSwap {
    address public owner;

    enum SwapStatus { Pending, Accepted, Declined }

    struct Book {
        string title;
        string author;
        bool isAvailable;
    }

    struct SwapRequest {
        address requester;
        uint256 requestedBookId;
        SwapStatus status;
    }

    mapping(address => Book[]) public userBooks;
    mapping(address => mapping(address => SwapRequest)) public swapRequests;

    event BookAdded(address indexed user, string title, string author);
    event SwapRequested(address indexed requester, address indexed responder, uint256 requestedBookId);
    event SwapResponse(address indexed requester, address indexed responder, SwapStatus status);
    event SwapAgreed(address indexed requester, address indexed responder, uint256 requestedBookId, string meetupTime, string meetupPlace);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addBook(string memory _title, string memory _author) external {
        userBooks[msg.sender].push(Book(_title, _author, true));
        emit BookAdded(msg.sender, _title, _author);
    }

    function browseBooks() external view returns (Book[] memory) {
        return userBooks[msg.sender];
    }

    function requestSwap(address _responder, uint256 _requestedBookId) external {
        require(userBooks[msg.sender].length > 0, "No books available for swapping");
        require(userBooks[_responder].length > 0, "Responder has no books available");

        SwapRequest storage request = swapRequests[_responder][msg.sender];
        require(request.status == SwapStatus.Pending, "There is an ongoing or resolved request");

        request.requester = msg.sender;
        request.requestedBookId = _requestedBookId;
        request.status = SwapStatus.Pending;

        emit SwapRequested(msg.sender, _responder, _requestedBookId);
    }

    function respondToSwap(address _requester, uint256 _selectedBookId, SwapStatus _status) external {
        SwapRequest storage request = swapRequests[msg.sender][_requester];
        require(request.status == SwapStatus.Pending, "Request has already been responded to");

        request.status = _status;

        if (_status == SwapStatus.Accepted) {
            require(userBooks[msg.sender][_selectedBookId].isAvailable, "Selected book is not available");

            emit SwapResponse(msg.sender, _requester, SwapStatus.Accepted);
        } else {
            emit SwapResponse(msg.sender, _requester, SwapStatus.Declined);
        }
    }

    function agreeToSwap(address _requester, uint256 _requestedBookId, string memory _meetupTime, string memory _meetupPlace) external {
        SwapRequest storage request = swapRequests[msg.sender][_requester];
        require(request.status == SwapStatus.Accepted, "Request is not accepted");

        require(userBooks[msg.sender][_requestedBookId].isAvailable, "Requested book is not available");

        userBooks[msg.sender][_requestedBookId].isAvailable = false;

        emit SwapAgreed(msg.sender, _requester, _requestedBookId, _meetupTime, _meetupPlace);
    }
}
