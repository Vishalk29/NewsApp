import React, { Component } from 'react'
import NewsItem from './NewsItem'

// in bootstrap there is 12 cloumn grid
export class News extends Component {
    articles = [
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Dean Bilton",
            "title": "Australia's desperation and England's defiance deliver another memorable SCG Ashes chapter",
            "description": "Though technically a dead rubber, under fading light and with pulses racing, day five in Sydney felt like the best Test cricket has to offer, writes Dean Bilton.",
            "url": "http://www.abc.net.au/news/2022-01-09/australia-england-fight-to-the-end-in-gripping-scg-test/100746710",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/db5582d6da5fd6bfa10393a2ac4d0876?impolicy=wcms_crop_resize&cropH=2747&cropW=4883&xPos=0&yPos=509&width=862&height=485",
            "publishedAt": "2022-01-09T09:09:02Z",
            "content": "Days like this, the fifth one of a Test with the result still in the balance, have a tried and true rhythm to them.\r\nThey'll generally start slowly, not helped by the conspicuous lack of a crowd or e… [+5612 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }

    ];
    constructor() {
        super()
        console.log("This is news url constructor")
        this.state = {
            article: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>SmartNews -Top Headlines</h2>
                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>


            </div>
        )
    }
}

export default News
