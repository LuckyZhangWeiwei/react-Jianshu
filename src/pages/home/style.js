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
width:240px;
float: right;
`

export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow: hidden;
margin-left: -10px;
border-bottom: 1px solid #dcdcdc;
`

export const TopItem = styled.div`
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