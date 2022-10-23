import React from "react";
import ContentLoader from "react-content-loader";

function MyLoader(props){
    return(
        <ContentLoader
            speed={2}
            width={`100%`}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            {...props}
        >
            <rect x="50" y="6" rx="4" ry="4" width="100%" height="38" />
            <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
            <rect x="50" y="55" rx="4" ry="4" width="100%" height="38" />
            <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
            <rect x="50" y="104" rx="4" ry="4" width="100%" height="38" />
            <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
        </ContentLoader>
    )
     
}

function LoaderVanilla(){
    return(
        <React.Fragment>
            <div className="container">
                <div className="background">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export {MyLoader, LoaderVanilla};

//https://skeletonreact.com/