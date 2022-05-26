import React, { useEffect, useState } from 'react'

export const MediaCard = () => {

  const [repositories,setRepositories] = useState([]);

  const getRepositories = async() => {
    const response = await fetch('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc');
    
    setRepositories([await response.json()]);
    
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <h2>List of Most Starred Github Repo</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {

          repositories.map((curElem) => {
              const {id, avatar_url, starred_url, description, stargazers_count, open_issues, created_at} = curElem;
              return(
                <div className="col-10 col-md-4 mt-5" key={id}>
              <div className="card p-2">
                  <div className="d-flex align-items-center">
                      <div className="image"><img src={avatar_url} width="155"/></div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{starred_url}</h4> 
                        <span className="textLeft">{description}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column"><span className="articles"></span> <span className="number1">{stargazers_count}</span></div>
                          <div className="d-flex flex-column"><span className="followers"></span> <span className="number2">{open_issues}</span></div>
                          <div className="d-flex flex-column"><span className="rating"></span> <span className="number3">{created_at}</span></div>


                        </div>
                      </div>
                  </div>  
              </div>  
            </div> 
              )
            })
          }
            
        </div>

      </div>
    </>
  )
}

export default MediaCard;
