import styled from 'styled-components'

export const HomeWrapper = styled.div`
width:960px;
margin: 0 auto;
overflow:hidden;
`

export const HomeLeft = styled.div`
margin-left: 15px;
padding-top:30px;
width:625px;
float: left;
.banner-img {
    width:625px;
    height: 270px; 
}
`

export const HomeRight = styled.div`
width:280px;
float: right;
`

export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow: hidden;
margin-left: -10px;
border-bottom: 1px solid #dcdcdc;
`

export const TopItem = styled.a.attrs({
    href: ''
})`
display:block;
text-decoration:none;
float: left;
background: #f7f7f7;
height: 32px;
line-height: 32px;
font-size: 14px;
margin-left: 10px;
margin-top: 10px;
color: #000;
border: 1px solid #dcdcdc;
border-radius: 4px;
padding-right: 10px;
.topic-pic {
    width: 32px;
    height: 32px;
    display:block;
    float: left;
    margin-right: 10px;
}
`

export const ListItem = styled.div`
padding: 20px 0;
overflow:hidden;
border-bottom: 1px solid #dcdcdc;
.list-pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
}
`

export const ListInfo = styled.div`
width:500px;
float: left;
.title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
}
.desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
}
`

export const RecommendWrapper = styled.div`
margin: 30px 0;
width: 280px;
`

export const RecommendItem = styled.div`
width: 280px;
height: 50px;
background: url(${(props) => props.imgUrl});
background-size: contain;
`

export const WriterWrapper = styled.div`
width:278px;
border: 1px solid #dcdcdc;
border-radius: 3px;
height:300px;
line-height:300px;
text-align:center;
`

export const LoadMore = styled.div`
width: 100%;
height:40px;
line-height:40px;
text-align:center;
background: #a5a5a5;
border-radius: 20px;
color: #fff;
cursor:pointer;
margin: 30px 0;
`

export const BackTop = styled.div`
position: fixed;
right:100px;
bottom: 100px;
width: 60px;
height:60px;
line-height:60px;
text-align: center;
border: 1px solid #ccc;
font-size:14px;
padding: 5px;
`