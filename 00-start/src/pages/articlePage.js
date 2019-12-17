import React from "react";
import articles from '../articles.js';
//import NOTFoundPage    from './NOTFoundPage';
import ArticleslistComp from "../Components/ArticleslistComp.js";

class  articlePage extends React.Component {
  render() {
  //variable dans lequel je stock this.props.match.params.name le nom de l'article 
  const name=this.props.match.params.name;
  const article=articles.find((art)=>art.name===name);
  const   relatedArticles=articles.filter(art=>art.name!=name)
  if(article)
 
    return (
   
   <div>
    <h1>{article.titre}</h1>
    <div> <h1>{article.titre}</h1>
    {article.paragraphes.map((p)=><p>{p}</p>)}</div>
    <hr/>
    <h2>Related articles</h2>
    <ArticleslistComp  articles={articles={relatedArticles}}/>
    </div>);

    else
    return "";
    //return <NOTFoundPage/>;

  }
}
export default  articlePage;
