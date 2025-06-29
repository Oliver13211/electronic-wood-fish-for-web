export default function Foot(){
    return(
      <footer id="foot">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div id="foot-flex">
            <p className="foot-text">我的博客</p>
            <p className="foot-text">联系我</p>
            <p className="foot-text">关于本软件</p>
        </div>
        <div style={{marginRight:"20%"}}><h1 id="title" style={{fontSize:"3em"}}>电子木鱼</h1>
        <p id="title-sub">王中王荣誉出品</p></div>
        </div>
      </footer>
    )
  }