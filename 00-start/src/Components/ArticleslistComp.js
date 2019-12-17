import React from "react";



class ArticleslistComp extends React.Component {
  render() {
    return (<div>
           {this.props.articles.map(art=><h1>{art.titre}</h1>)};
         </div>);
  }
}
export default ArticleslistComp;
/*
return (<div>
        {this.props.articles.map((article)=>{
     return (<link to={'/article/${article.name}'}>
         <h3>{articles}</h3>
         </link>);
        })}

         </div>
    );
    */