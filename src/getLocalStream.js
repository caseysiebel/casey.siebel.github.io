const getLocalStream = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  return localStream;
}

export default getLocalStream;
