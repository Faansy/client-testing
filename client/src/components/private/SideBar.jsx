export default function SideBar() {
    return (
        <aside className="col-md-3 vh-100 position-sticky top-0 start-0 card rounded-0 d-flex flex-column row-gap-4 align-items-start py-4 ps-3 pe-5 overflow-y-auto sidenav">
            <span className="text-bg-dark text-light rounded-circle py-1 px-2">M</span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-house"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Home</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-bell"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Notifications</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-chat-left-text"
                        viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path
                            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Messages</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-bookmark"
                        viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Bookmarks</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-person-heart"
                        viewBox="0 0 16 16">
                        <path
                            d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Subscriptions</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-credit-card"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">Add card</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-person-circle"
                        viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">My profile</span>
                </a>
            </span>
            <span className="sidebar-item">
                <a href="" className="text-decoration-none text-secondary d-flex align-items-center column-gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-three-dots"
                        viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                    <span className="d-none d-md-block fs-5 fw-semibold">More</span>
                </a>
            </span>
            <span className="align-self-stretch">
                <a href="" className="text-decoration-none text-light">
                    <div className="d-flex align-items-center column-gap-3 bg-dark rounded-pill py-1 px-2 d-none d-md-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" className="bi bi-plus mb-1"
                        viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        <small className="fw-semibold text-light text-uppercase">New Post</small>
                    </div>
                    <div className="d-block d-md-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#820303" className="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                        </svg>
                    </div>
                </a>
            </span>
        </aside>
    )
}
