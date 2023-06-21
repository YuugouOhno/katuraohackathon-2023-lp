export default function Top() {
    return (
        <div className="relative bg-katurao-creem w-full px-[10%] md:px-[15%] pt-32 pb-40 md:pb-48 font-title font-black">
            <div className="z-10 relative">

                <p className="text-katurao-green text-5xl md:text-8xl">
                    かつらお<br />
                    ハッカソン
                </p>
                <p className="text-katurao-black text-5xl md:text-8xl">2023</p>
                <p className="text-katurao-black">ものづくりを通して、これまでにないものを作る。かつらおハッカソン2023はそんなハッカソンです。<br />
                皆さまには福島県葛尾村(かつらおむら)・東京都内会場の2拠点を舞台として、2週間の期間で「つながり」というテーマでの開発を取り組んでいただきます。<br />
                テーマにマッチした内容であれば、Webサービスでもモバイルアプリケーションなど、形式は不問。皆さまのチャレンジをお待ちしています！</p>
            </div>
            <div className="px-20 md:pt-72 pt-32 absolute inset-0 w-full h-full object-cover flex justify-center items-center">

                <img src="./葛尾村.PNG" className="z-0" />
            </div>
        </div>
    )
}