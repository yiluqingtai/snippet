'use strict'

let localPeerConnection;

// servers参数指定stun和turn服务器
localPeerConnection = new RTCPeerConnection(servers);
// 网络候选项可用时，调用处理函数handleConnection
localPeerConnection.addEventListener('icecandidate', handleConnection); // onicecandidate触发？
localPeerConnection.addEventListener('iceconnectionstatechange', handleConnectionChange);

const mediaStreamConstraints = {
    video : true,
};

const localVideo = document.querySelector('#localVideo');
const remoteVideo = document.querySelector('#remoteVideo');

const startButton = document.querySelector("startButton");
const callButton = document.querySelector("#callButton");
const hangupButton = document.querySelector("#hangupButton");

let localStream;


// 添加本地流处理程序
function gotLocalStream(mediaStream) {
    localVideo.srcObject = mediaStream;
    localStream = mediaStream;
    trace('Receive local stream'); // 打印函数调用轨迹
    callButton.disabled = false;
}

// 候选项可用时处理程序
// 另一端调用addIceCandidate函数将候选项加入到远程对等项描述中
function handleConnection(event) {
    const peerConnection = event.target;
    const icecandidate = event.candidate;

    if (icecandidate) {
        const newIceCandidate = new RTCIceCandidate(icecandidate);
        const otherPeer = getOtherPeer(peerConnection);

        otherPeer.addIceCandidate(newIceCandidate)
         .then(() => {handleConnectionSuccess(peerConnection);})
         .catch((error) => {handleConnectionFailure(peerConnection, error);})

        trace('${getPeerName(peerConnection)} ICE Candidate\n' + 
                '${event.candidate.candidate}.');
    }
}


// 1、获取本地流
navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(gotLocalStream).catch(handleLocalStreamError);

// 2、添加本地流到对等连接
localPeerConnection.addStream(localStream);
trace('Add local stream to peer connection');




