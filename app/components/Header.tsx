export default function Header() {
    return (
        <div className="fixed top-0 left-0 z-40 bg-katurao-green flex w-full h-16 justify-between items-center px-[10%] md:px-[15%] font-title font-bold">
            <div>
                <p className="text-white text-xl">
                    #かつらおハッカソン
                </p>
            </div>
            <div className="bg-white rounded-md py-1 px-6 md:block hidden">
                <p className="text-katurao-green text-lg">
                    <a href="https://forms.gle/5mH9Z2X73W3rNNyU7" target="_blank">ご応募はこちら</a>
                </p>
            </div>
        </div>
    )
}