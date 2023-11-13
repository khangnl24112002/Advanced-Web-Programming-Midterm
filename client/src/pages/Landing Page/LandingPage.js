import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <main className="landingPage">
            <div className="landingPageContext">
                <p className="landingPageText">
                    Chào mừng bạn đến với nhóm thuộc lớp Web Nâng Cao! Chúng tôi
                    là các chuyên gia về phát triển và tối ưu hóa website. Với
                    kinh nghiệm lâu năm và kiến thức chuyên sâu, chúng tôi cam
                    kết mang đến cho bạn những giải pháp tối ưu nhất để nâng cao
                    sự hiệu quả cho trang web của bạn.
                </p>
                <button
                    className="button"
                    onClick={() => {
                        navigate("/auth/sign-in");
                    }}
                >
                    Tham gia ngay
                </button>
            </div>
        </main>
    );
};

export default LandingPage;
