import React from "react";
import articles  from '../articles';
import  ArticleslistComp  from '../Components/ArticleslistComp';

class articleListPage extends React.Component {
  render() {
    return <div>
      <h1>article List</h1> 
      <ArticleslistComp  articles={articles}/>
      </div>;
  }
}
export default articleListPage;
