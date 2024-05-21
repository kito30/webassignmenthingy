import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {  spotifyTrackPlayer } from './spotifytrack.js';
import './tic-tac-toe.js';
class AnhWidget extends LitElement{
    static properties = {
        trackID : {state:true,type: String}
    }
    static styles = css`
    :host {
        display: block;
        width: 400px;
        height: 500px;
        background-color: azure;
        border: 1px solid black;
        box-shadow: 0 0 0 1px;
    }
    input{
        width:70%;
        font-family:azuki;
        font-size:15px;
        border: 3px solid #9AD1E4;
        background-color: #cee0e8;
        border-radius: 5px;
    }
    ::placeholder{
        color: #0c1015; 
    }
    #spotify{
        margin:auto;
    }
    button{
        border: 3px solid #9AD1E4;
        border-radius: 20px;
        font-size:15px;
        padding:2px;
        width:80px;
        background-color: #cee0e8;
        font-family:azuki;
    }
    button:hover{
        opacity:70%;
        background-color:#909ca2;
    }
    
  `;
    constructor(){
        super();
        this.trackID="https://open.spotify.com/track/5eY7692tmgHB9dbmq6wa2M?si=8736f249799f4a3e";
    }
    firstUpdated(){
        this.getTrackID();
    }
    getTrackID(){
        const trackInput = this.renderRoot.querySelector('#inputTrack');
        const performSearch = () =>{
            this.trackID= trackInput.value;
            this.requestUpdate();
        };
        const searchButton = this.renderRoot.querySelector('#findbutton');
        searchButton.addEventListener('click',performSearch);
        trackInput.addEventListener('keydown',(key)=>{
            if(key.key==='Enter')
            {
                performSearch();
            }
        })       
    }
    render(){ 
        return html`
        <tic-toe> </tic-toe>
        <div>
            <input id="inputTrack" type="text" placeholder="Enter your playlist or song link">
            <button id="findbutton" type="button">Search</button>
        </div>
        <div id= "spotify">${spotifyTrackPlayer(this.trackID)}</div>
        `
    }
}
customElements.define('anh-widget',AnhWidget);