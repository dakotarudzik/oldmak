import React from 'react';
import $ from "jQuery";
import Masonry from 'react-masonry-component';
import Painting from './Painting';

import img1 from "../assets/goofyRobo.jpg";
import img2 from "../assets/bern.jpg";


const queries = {

    xs: '(max-width: 320px)',

    sm: '(max-width: 720px)',

    md: '(max-width: 1024)'

}

const useBreakpoint = (queries) => {
    const [queryMatch, setQueryMatch] = useState(null);
    useEffect(() => {
        const mediaQueryLists = {};
        const keys = Object.keys(queries);

        let isAttached = false;
        const handleQueryListener = () => {
            const updatedMatches = keys.reduce((acc, media) => {
                acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
                return acc;
            }, {})
            setQueryMatch(updatedMatches)
        }

        if (window && window.matchMedia) {
            const matches = {};


        }
    })
}






keys.forEach(media => {
    if (typeof queries[media] === 'string' ) {
        mediaQueryLists[media].addListener(handleQueryListener)
        matches[media] = mediaQueryLists[media].matches
    } else {
        matches[media] = false
    }
});

setQueryMatch(matches);
isAttached = true;
keys.forEach(media => {
    if(typeof queries[media] === 'string') {
        mediaQueryLists[media].addListener(handleQueryListener);
    }
});

const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 1,
    horizontalOrder: true,
    itemSelector: '.card-element',
    gutter:0,
    percentPosition: false
};

const imagesLoadedOptions = { background: '.placeholder' };

class Cards extends React.Component {
    render() {
        // const elements = [{src: img1}, {src: img2}, {src: img1}]

        const childElements = this.props.elements.map(function(element) {
            return (
                <li className="card-element" style={{ listStyle: 'none' }}>
                    <Painting src={element.src} hgt={ element.hgt } style={{ maxWidth: '45vw' }} />
                </li>
            );
        });

        return (
            <Masonry
                className={'gal-layout'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                imagesLoadedOptions={imagesLoadedOptions}
                >
                    <div className="grid-sizer"></div>
                    {childElements}
            </Masonry>
        );
    }
}

export default Cards;





// return(
        //     <div className="container-fluid d-flex justify-content-center" style={{ marginTop: '2rem' }}>
        //         <div className="row row-cols-2 justify-content-around">
        //             <div className="col" style={{ width: 'auto', maxWidth: '45vw' }}>
        //                 <Painting image={ img1 }/>
        //             </div>
        //             <div className="col" style={{ width: 'auto', maxWidth: '45vw' }}>
        //                 <Painting image={ img2 }/>
        //             </div>
        //             <div className="col" style={{ width: 'auto', maxWidth: '45vw' }}>
        //                 <Painting image={ img1 }/>
        //             </div>
        //         </div>
        //     </div>
        // );