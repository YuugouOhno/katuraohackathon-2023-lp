export default function Header() {
    return (
        <div className="bg-katurao-green flex w-full h-16 justify-between items-center px-[10%] md:px-[15%] font-title font-bold">
            <div>
                <p className="text-white text-xl">
                    #かつらおハッカソン
                </p>
            </div>
            <div className="bg-white rounded-md py-1 px-6 md:block hidden">
                <p className="text-katurao-green text-lg">
                    ご応募はこちら
                </p>
            </div>
        </div>
    )
}