// Event Add
start.addEventListener("click", confirmStart);
end.addEventListener("click", endwatch);

function checkBeforeStart() {
    var notempty = IsTitleEmpty();
    if (notempty) {
        start.style.display = 'none';
        end.style.display = 'flex';
        startWatch();
    }
    else {
        //제목 입력안했으면 
    }
}
function IsTitleEmpty() {
    var title = document.getElementById("title__input").value;
    if (!title) {
        alert("제목을 입력하세요!");
        return false;
    }
    else return true;
}
function startWatch() {
    intervalobj = setInterval(watchLocation, 1000);
}
function watchLocation() {
    navigator.geolocation.getCurrentPosition( function(position) {
        lngitudeValue = position.coords.longitude;
        latitudeValue = position.coords.latitude;

        if (lastResult != result) {
            lastResult = result;
            getAddress(latitudeValue, lngitudeValue);
            mapGetTitle = mapSetTitle.innerText
            postLatlng(latitudeValue, lngitudeValue, mapGetTitle);
            setMarker(latitudeValue, lngitudeValue);
            paintLine(latitudeValue, lngitudeValue);
            latlngsLength=latlngs.length;
            markersLength=markers.length;
        }else{
            console.log("위치가 같음");
        }
    }, function(error) {
        console.error(error);
    }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
    });
}
function endwatch() {
    setEndMarker(latitudeValue, lngitudeValue);
    confirmEnd();
}
function confirmStart(){
    let cfStart = confirm('여행을 시작하시겠습니까 ?')
    if (cfStart) {
        checkBeforeStart();
    }
}
function confirmEnd() {
    let cfEnd = confirm("여행을 종료하시겠습니까?");
    if (cfEnd) {
        start.style.display = 'flex';
        end.style.display = 'none';
        clearInterval(intervalobj);
    }
}
/* @To do
* 1 이동경로 종료 시 지도에 등록된 마커와 선 삭제하는 delete 함수
* 2 DB에 저장된 위도 경도를 바탕으로 지도에 마커랑 선 표시하는 get함수
*/
