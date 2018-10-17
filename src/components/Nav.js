import React, { Component } from 'react';
import Chapter from './Chapter';
import Article from  './Article';

import '../css/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="book-nav">
                <div className="book-name">
                    Jump To <br/> Open Source
                </div>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={-1} index="목차" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={0} index="1. 소개" handle={this.props.handle}/>
                    <Article active={this.props.active} level={1} index="1) 오픈소스 정의" handle={this.props.handle}/>
                    <Article active={this.props.active} level={2} index="2) 오픈소스 배포조건" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={3} index="2. 역사" handle={this.props.handle}/>
                    <Article active={this.props.active} level={4} index="1) 자유 소프트웨어 (1950~1960초)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={5} index="2) 소프트웨어의 하락세 (1960말)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={6} index="3) 소프트웨어의 상품화 (1970말~1980초)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={7} index="5) 자유 소프트웨어 운동(1984~)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={8} index="4) 리눅스 등장 (1991)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={9} index="5) OSI 단체 설립 (1998)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={10} index="6) 2000년대 이후" handle={this.props.handle}/>
                <div className="nav-line"/> 
                
                <Chapter active={this.props.active} level={11} index="3. 오픈소스의 장 단점" handle={this.props.handle}/>
                    <Article active={this.props.active} level={12} index="1) 오픈소스의 장점" handle={this.props.handle}/>
                    <Article active={this.props.active} level={13} index="2) 오픈소스의 단점" handle={this.props.handle}/>
                    <Article active={this.props.active} level={14} index="2) 오픈소스의 특징" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={15} index="4. Git " handle={this.props.handle}/>
                    <Article active={this.props.active} level={16} index="1) Git 소개" handle={this.props.handle}/>
                    <Article active={this.props.active} level={17} index="2) Git의 장점" handle={this.props.handle}/>
                    <Article active={this.props.active} level={18} index="3) Git의 주요 용어 " handle={this.props.handle}/>
                    <Article active={this.props.active} level={19} index="&nbsp;&nbsp;&nbsp;&nbsp;(1) 저장소 (Repository)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={20} index="&nbsp;&nbsp;&nbsp;&nbsp;(2) 체크아웃 (Checkout)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={21} index="&nbsp;&nbsp;&nbsp;&nbsp;(3) 스테이지 (Stage)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={22} index="&nbsp;&nbsp;&nbsp;&nbsp;(4) 커밋 (Commit)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={23} index="&nbsp;&nbsp;&nbsp;&nbsp;(5) 태그 (Tag)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={24} index="&nbsp;&nbsp;&nbsp;&nbsp;(6) 푸시 (Push)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={25} index="&nbsp;&nbsp;&nbsp;&nbsp;(7) 풀 (Pull)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={26} index="&nbsp;&nbsp;&nbsp;&nbsp;(8) 브랜치 (Branch)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={27} index="&nbsp;&nbsp;&nbsp;&nbsp;(9) 병합 (Merge)" handle={this.props.handle}/>
                    <Article active={this.props.active} level={28} index="4) GitKraken을 이용한 git 사용" handle={this.props.handle}/>
                    <Article active={this.props.active} level={29} index="5) Git 관련 웹 기반 솔루션 " handle={this.props.handle}/>
                    <Article active={this.props.active} level={30} index="6) 마이크로 소프트의 Github인수" handle={this.props.handle}/>
                <div className="nav-line"/> 
                
                <Chapter active={this.props.active} level={31} index="5. 오픈소스의 전망" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={32} index="6. 부록" handle={this.props.handle}/>
                    <Article active={this.props.active} level={33} index="1) 라이선스" handle={this.props.handle}/>
                <div className="nav-line"/> 
            </div>
        )
    }
}

export default Nav;