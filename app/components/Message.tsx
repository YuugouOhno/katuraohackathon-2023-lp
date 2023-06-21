export default function Message() {
    return (
        <div className="bg-katurao-yellow  w-full px-[10%] md:px-[15%] md:text-center items-center">
            <p className="text-white text-5xl md:text-9xl font-title font-black mt-14 mb-10 md:my-28">Message</p>
            <div className="font-title font-black text-2xl md:text-3xl">
                <p className="text-katurao-black mb-12">先輩からのメッセージ</p>
            </div>
            <div className="text-katurao-black font-body font-bold md:font-light text-sm md:text-2xl mb-28">
                <p className="text-left">原発事故に伴う全村避難から12年、そして避難解除から7年を経て、葛尾村は今年村制100周年を迎えました。<br />
                私が初めて葛尾村を訪れたのは、避難解除から2回目の春、高校3年生のことです。その後、大学生活をこの村で過ごし、村での経験からWebエンジニアとして働く道を選びました。<br />
現在、葛尾村は過渡期に差し掛かっています。昨年、中心部の集落では、震災前からの住民の数を移住者の数が超えました。<br />
このような状況だからこそ、村のこれまでを引き受けながら、皆さんとともに、村のこれからを描いていけることを願っています。</p>
            <p className="mb-3 text-right">余田大輝</p>
            </div>
        </div>
    )
}