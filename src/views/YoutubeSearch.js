import './Blog.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'
import moment from 'moment';


const YoutubeSearch = () => {
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    const handleClickSearch = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyDeKZAeI-CR4FgcoMgM6x8sZm_tfxXJyYA',
                'type': 'video',
                'q': query
            }
        })
        if (res?.data?.items) {
            const arrayItem = res.data.items
            setVideos(arrayItem)
        }

        console.log(videos)
    }

    return (
        <>
            <div className="yt-search">
                <input type='text' placeholder='Search'
                    value={query} onChange={(e) => { setQuery(e.target.value) }}
                />
                <button type='button' onClick={handleClickSearch}>Search</button>
            </div>
            {videos.map((item, index) => {
                return (
                    <>
                        <div className="youtubeSearch-container">
                            <div className='leff'>
                                <div className='yt-result'>
                                    <iframe className='child-iframe'
                                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                                        title={item.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            </div>
                            <div className='right'>
                                <div className='detail title '>
                                    {item.snippet.title}
                                </div>
                                <div className='detail'>
                                    PublishedAt: {moment(item.snippet.publishedAt).format('DD/MM/YYYY hh:mm:ss A')}
                                </div>
                                <div className='detail'>
                                    ChannelTitle: {item.snippet.channelTitle}
                                </div>
                                <div className='detail'>
                                    Description": {item.snippet.Description}
                                </div>
                            </div>

                        </div>
                    </>
                )
            })

            }




        </>

    )
}
export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "uIUT4SK1fUhhaYUZ53QE2I2-6bc",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "m4-iRkDCnCvzbj6kF0ociqttl6Y",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "uxIr9aOB0pg"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-01T04:00:14Z",
//           "channelId": "UCOB-fDHxXLaf3vpX_gbTdIg",
//           "title": "H??I T???T | TH??NH B??O NG??Y T???T PH???N 2 (FULL) | Ti???n Lu???t, Ng?? Ki???n Huy, Hu???nh Ph????ng,...",
//           "description": "H??I T???T | TH??NH B??O NG??Y T???T PH???N 2 (FULL) | Ti???n Lu???t, Ng?? Ki???n Huy, Hu???nh Ph????ng,... #ThanhBao #HaiTet ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/uxIr9aOB0pg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/uxIr9aOB0pg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/uxIr9aOB0pg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Ti???n Lu???t Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-01T04:00:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "QM50QDXACVPQTGiqCFhTDGns1nc",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "yKKoNmQSrhY"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-31T02:01:04Z",
//           "channelId": "UCc4DFew7HPlONqWatBM_w0A",
//           "title": "H??i t???t 2022 - S???C PHONG - Phim h??i d??n gian m???i nh???t 2022 T???p 1 - Qu???c Anh, Ti???n ?????t, Ph?? ????n",
//           "description": "haitet2022, #haidangian, #sacphong, #daodientrungtran, #phimhaitet, #phimhaitet2022 H??i t???t 2022 - S???C PHONG - Phim h??i ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/yKKoNmQSrhY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/yKKoNmQSrhY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/yKKoNmQSrhY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Thang Long Audio Visual",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-31T02:01:04Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "QhGM8AVECTNzOrOCdWn2-ulLHEM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "9WvAKq78Cow"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-14T12:00:39Z",
//           "channelId": "UCTZfshAstC5XukpE3OY62Jg",
//           "title": "H??i T???t 2022 M???i Nh???t | L??ng ??? V??? 8 - T???p 1 | Phim H??i Chi???n Th???ng, B??nh Tr???ng, Quang T??o Hay Nh???t",
//           "description": "H??i T???t 2022 M???i Nh???t | L??ng ??? V??? 8 - T???p 1 | Phim H??i Chi???n Th???ng, B??nh Tr???ng, Quang T??o, Hi???p G?? Hay Nh???t L??ng ??? V??? 8 ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/9WvAKq78Cow/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/9WvAKq78Cow/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/9WvAKq78Cow/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Phim H??i - B??nh Minh Film",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-14T12:00:39Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "svpMXJMrh37SDcqtqjGpjm8Zqbs",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "xjY-JdP6lSI"
//         },
//         "snippet": {
//           "publishedAt": "2022-06-21T09:11:38Z",
//           "channelId": "UCTZfshAstC5XukpE3OY62Jg",
//           "title": "Phim H??i Trung Hi???u, Quang T??o, C??ng L??, B??nh Tr???ng Hay Nh???t - ?????I GIA CH??N ?????T 6",
//           "description": "Phim H??i Trung Hi???u, Quang T??o, C??ng L??, B??nh Tr???ng Hay Nh???t - ?????I GIA CH??N ?????T 6 L??ng ??? v??? 2022 ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/xjY-JdP6lSI/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/xjY-JdP6lSI/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/xjY-JdP6lSI/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Phim H??i - B??nh Minh Film",
//           "liveBroadcastContent": "live",
//           "publishTime": "2022-06-21T09:11:38Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "5EQfC3GyS7eiT5xaJvZjxijLkyY",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "txRDRhnhkdQ"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-31T08:56:22Z",
//           "channelId": "UCurbK4xlvyNsUPnH8cWCs6g",
//           "title": "H??i T???t 2022 | Ch??? Em Song Sinh | T???t N??y L???y Ch???ng -T???p 1| BB Tr???n, H???i Tri???u, Ng???c Ph?????c, Ng???c Hoa",
//           "description": "H??i T???t 2022 | Ch??? Em Song Sinh | T???t N??y L???y Ch???ng -T???p 1| BB Tr???n, H???i Tri???u, Ng???c Ph?????c, Ng???c Hoa #BBTran #HaiTrieu ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/txRDRhnhkdQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/txRDRhnhkdQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/txRDRhnhkdQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "BB Tr???n",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-31T08:56:22Z"
//         }
//       }
//     ]
//   }
