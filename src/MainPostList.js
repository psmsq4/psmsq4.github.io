export function MainPostList() {
    return (
        <Frame width="390px" height="400px">
            <Frame width="390px" height="20px" style={latelyPostStyle}> {/* 최신 글 */}
                <span>최신 작성글</span>
                <AddButton>+</AddButton>
            </Frame>
            <hr></hr>
            <Frame width="390px" height="47px" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F3FDFF", borderRadius: "10px" }}>
                <img src={wireframeImg} style={{ width: "44px", height: "44px" }}></img>
                <Frame width="300px" height="47px" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ height: "14px", lineHeight: "14px", fontSize: "14px", margin: "0px 0px 5px 10px" }}>placeHolder</p>
                    <p style={{ height: "14px", lineHeight: "14px", fontSize: "9px", margin: "0px 0px 5px 10px" }}>test</p>
                </Frame>
                <p style={{ height: "40px", lineHeight: "40px", font: "14px", margin: "0px" }}>DevInSSH</p>
            </Frame>
        </Frame>
    );
}