export default function MouseScroll() {
    return (
        <div className="mouse_scroll lg:block hidden">
            <div className="mouse">
                <div className="wheel"></div>
            </div>
            <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
            </div>
        </div>
    )
}