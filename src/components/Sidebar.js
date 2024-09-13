import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/style.css';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSupportDropdownOpen, setSupportDropdownOpen] = useState(false);
    const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

    const toggleSupportDropdown = () => {
        setSupportDropdownOpen(!isSupportDropdownOpen);
    };

    const toggleSettingsDropdown = () => {
        setSettingsDropdownOpen(!isSettingsDropdownOpen);
    };

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/signup') {
            setSupportDropdownOpen(false);
            setSettingsDropdownOpen(false);
        }
    }, [location]);

    const handleLoginClick = () => {
        navigate('/login');  // 로그인 클릭 시 /login 경로로 이동
    };

    return (
        <div className="sidebarArea">
            <nav className="sidebarContent">
                <div className="profileArea">
                    <div className="profileIcon">
                        <FontAwesomeIcon icon="fa-solid fa-circle-user" style={{ color: "#e9f5c8", }} />
                    </div>
                    <div className="profileText">
                        <span>안녕하세요, 사용자님!</span>
                    </div>
                </div>
                <div className="sidebarContent">
                    <Link
                        to="/chat"
                        className={`contentDefault ${location.pathname === '/chat' ? 'active' : ''}`}
                    >
                        <i className="contentIcon fi-ss-microchip-ai"></i>
                        <i className="contentText">
                            <span>재무분석</span>
                        </i>
                    </Link>
                    <div className={`toggleContent ${isSupportDropdownOpen ? 'show' : ''}`}>
                        <a
                            href="#!"
                            className="toggleIcon"
                            onClick={toggleSupportDropdown}
                            aria-expanded={isSupportDropdownOpen}
                        >
                            <i className="contentIcon fi-ss-form"></i>
                            <i className="contentText">
                                <span>지원사업</span>
                            </i>
                        </a>
                        <div className={`toggleContent ${isSupportDropdownOpen ? 'show' : ''}`}>
                            <Link
                                to="/suggested-programs"
                                className={`toggleSubContent ${location.pathname === '/suggested-programs' ? 'active' : ''}`}
                            >
                                <i className="toggleSubContentText">
                                    <span>추천사업</span>
                                </i>
                            </Link>
                            <Link
                                to="/show-programs"
                                className={`toggleSubContent ${location.pathname === '/show-programs' ? 'active' : ''}`}
                            >
                                <i className="toggleSubContentText">
                                    <span>전체보기</span>
                                </i>
                            </Link>
                        </div>
                    </div>
                    <Link
                        to="/dashboard"
                        className={`contentDefault ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    >
                        <i className="contentIcon fi-ss-dashboard-monitor"></i>대시보드
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
