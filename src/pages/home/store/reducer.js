import { fromJS } from 'immutable';
const defaultState = fromJS({
    topicList: [{
       id: 1,
       title: '读书',
       imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 2,
        title: '简书电影',
        imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },{
        id: 3,
        title: '故事',
        imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
     },{
         id: 4,
         title: '摄影',
         imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
     },{
        id: 5,
        title: '旅行.在路上',
        imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
     },{
         id: 6,
         title: '@IT.互联网',
         imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
     },{
        id: 7,
        title: '自然科普',
        imgUrl: 'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
     }],
     articleList:[{
         id:1,
         title:'三剑客的离散',
         desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
         imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
     },{
        id:2,
        title:'踏十里花香，约你去看海',
        desc:'这几日，持续高温，烈日没有一丝遮挡地倾泻下来，亮的晃眼，热气灼人。没有风，道路两旁的白杨絮落个没完，一条条地铺满地，杨花胜雪，这雪落却不让人喜欢。朋友见我焦燥，便劝我一起走走，村里村外早己熟悉的风景，哪里能提起半点兴致？',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/4231766-f69bc93817b857b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:3,
        title:'越读书，越自由！',
        desc:'大家晚上好，很高兴今天能和大家一起分享关于读书的收获与快乐。首先作一下自我介绍，我叫笑薇，从后面念的话就是微笑，因为我觉得做人开心很重要，心情愉悦，才能生活美满，也希望能给大家带来快乐，记得我叫笑薇就好。',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:4,
        title:'三剑客的离散',
        desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/3058559-b5c9f147163c0959.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:5,
        title:'三剑客的离散',
        desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:6,
        title:'三剑客的离散',
        desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:7,
        title:'三剑客的离散',
        desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:8,
        title:'三剑客的离散',
        desc:'上大学时，我们十个人一个寝室。来自十个省市的小姑娘朝夕相处四年以后，每个人什么脾气性格，每个人有什么老乡亲戚，每个人有什么习惯，每个人有...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11047565-b86771d475691b33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
           return state
    }
}