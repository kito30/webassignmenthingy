export const spotifyTrackPlayer= (id) => {  
    let iframe = document.createElement('iframe');
    if(id.includes("track")){
        let inputvalueid = id.substring(id.lastIndexOf('track')+6,id.indexOf('?'));
        iframe.src = "https://open.spotify.com/embed/track/" + inputvalueid;
    }
    else
    {
        let inputvalueid = id.substring(id.lastIndexOf('playlist')+9,id.indexOf('?'));
        iframe.src = "https://open.spotify.com/embed/playlist/" + inputvalueid; 
    }
    iframe.height=100;
    iframe.width ="100%";
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'encrypted-media');
    return iframe;
}