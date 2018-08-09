import { fromJS } from 'immutable';
import { constants } from './index'
// const defaultState = fromJS({
//     topicList: [{
//        id: 1,
//        title: '读书',
//        imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//     },{
//         id: 2,
//         title: '简书电影',
//         imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//     },{
//         id: 3,
//         title: '故事',
//         imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//      },{
//          id: 4,
//          title: '摄影',
//          imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//      },{
//         id: 5,
//         title: '旅行.在路上',
//         imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//      },{
//          id: 6,
//          title: '@IT.互联网',
//          imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//      },{
//         id: 7,
//         title: '自然科普',
//         imgUrl: 'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
//      }],
//      articleList:[{
//          id:1,
//          title:'三剑客的离散',
//          desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
//          imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//      },{
//         id:2,
//         title:'踏十里花香，约你去看海',
//         desc:'这几日，持续高温，烈日没有一丝遮挡地倾泻下来，亮的晃眼，热气灼人。没有风，道路两旁的白杨絮落个没完，一条条地铺满地，杨花胜雪，这雪落却不让人喜欢。朋友见我焦燥，便劝我一起走走，村里村外早己熟悉的风景，哪里能提起半点兴致？',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/4231766-f69bc93817b857b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:3,
//         title:'越读书，越自由！',
//         desc:'大家晚上好，很高兴今天能和大家一起分享关于读书的收获与快乐。首先作一下自我介绍，我叫笑薇，从后面念的话就是微笑，因为我觉得做人开心很重要，心情愉悦，才能生活美满，也希望能给大家带来快乐，记得我叫笑薇就好。',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:4,
//         title:'如果你喜欢，我愿给你一朵小小云',
//         desc:'很久以前，天空中有一朵小小云。他才一岁，还不会飞。有一天，它遇见了阿狸……',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/3058559-b5c9f147163c0959.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:5,
//         title:'警世的“教科书式耍赖”：老赖的世界究竟可以让你不懂到什么程度？',
//         desc:'6月27日上午，唐山“教科书式老赖”黄淑芬犯交通肇事罪一案在河北省唐山市丰润区人民法院一审，法院当庭宣判，黄淑芬犯交通肇事罪，被判处有期徒刑8个月，黄淑芬当庭表示将上诉。',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/6887328-7087fa3ad3540dd2.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:6,
//         title:'我的下属工资超过我，你就说怎么忍？！',
//         desc:'小邓是我项目组的程序员，入司四年，工作表现平平。前阵子几个项目同时赶工大家忙得四脚朝天，恰逢老员工相继跳槽，新人入司需要带，一个人都恨不得掰成两半用。',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/2327035-ebdc1084a9b4b15a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:7,
//         title:'夏天这东西比雪糕还要消暑，低脂美味又营养，做法比水煮蛋还简单',
//         desc:'天气热了，总也少不了冷饮，雪糕、冰激凌更是都是大家首选的冷冻饮品，但是雪糕、冰激凌这样的冷饮吃多了终究是不好的，而且热量高到惊人，绝对是胖妹子的禁品，一口都不能碰的，比如像我这样的，一心想瘦成闪电的，外面这些冷饮只能看看，吃一口，10天减肥的成果就泡汤了，所以，跟我一样的妹子还是不吃为好，但是没有关系，教你在家做比外面买的还好吃的冷冻饮品作者：美食达人计划链接：https://www.jianshu.com/p/5ccd421f0dee來源：简书书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/4762891-043d67ce04881bdb?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     },{
//         id:8,
//         title:'在家中做个小女人就好',
//         desc:'我从小在农村里长大，见过各色女人。有的女人很能干，什么事也办得井井有条，但就是不把丈夫放在眼里，想骂就骂。有的女人属于女子无才便是德类型，只知道干活，内心平静，一切都丈夫说了算。您觉得哪种女人更适合孩子成长呢？',
//         imgUrl: 'https://upload-images.jianshu.io/upload_images/10951992-a7e0850a4c1121a7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
//     }],
//     recommendList: [{
//         id: 1,
//         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
//     },{
//         id:2,
//         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
//     },{
//         id:3,
//         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
//     },{
//         id:4,
//         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
//     },{
//         id:5,
//         imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
//     }]
// })

const defaultState = fromJS({
    topicList:[],
    articleList: [],
    recommendList:[],
    articlePage: 1,
    showScroll: false,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
           return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case constants.LOAD_MORE_DATA:
           return state.merge({
                articleList: state.get('articleList').concat(action.articleList),
                articlePage: action.articlePage
           })
         case constants.TOGGLE_TOP_SHOW:
           return state.set('showScroll', action.isShow)
        default:
           return state
    }
}