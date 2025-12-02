import React from 'react'

function Nav() {
    return (
        <div className="nk-header-menu">
            <ul className="nk-menu nk-menu-main">
                <li className="nk-menu-item">
                    <a href="/" className="nk-menu-link">
                        <span className="nk-menu-text">Anasayfa</span>
                    </a>
                </li>
                <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-text">Apps</span>
                    </a>
                    <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                            <a href="apps-messages.html" className="nk-menu-link">
                                <span className="nk-menu-text">Messages</span>
                            </a>
                        </li>
                        <li className="nk-menu-item">
                            <a href="apps-inbox.html" className="nk-menu-link">
                                <span className="nk-menu-text">Inbox / Mail</span>
                            </a>
                        </li>
                        <li className="nk-menu-item">
                            <a
                                href="apps-file-manager.html"
                                className="nk-menu-link"
                            >
                                <span className="nk-menu-text">File Manager</span>
                            </a>
                        </li>
                        <li className="nk-menu-item">
                            <a href="apps-chats.html" className="nk-menu-link">
                                <span className="nk-menu-text">
                                    Chats / Messenger
                                </span>
                            </a>
                        </li>
                        <li className="nk-menu-item">
                            <a href="apps-calendar.html" className="nk-menu-link">
                                <span className="nk-menu-text">Calendar</span>
                            </a>
                        </li>
                        <li className="nk-menu-item">
                            <a href="apps-kanban.html" className="nk-menu-link">
                                <span className="nk-menu-text">Kanban Board</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nk-menu-item">
                    <a href="components.html" className="nk-menu-link">
                        <span className="nk-menu-text">Components</span>
                    </a>
                </li>
                <li className="nk-menu-item">
                    <a href="support-kb.html" className="nk-menu-link">
                        <span className="nk-menu-text">Support</span>
                    </a>
                </li>
                <li className="nk-menu-item">
                    <a href="pages/contact.html" className="nk-menu-link">
                        <span className="nk-menu-text">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav