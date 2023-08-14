import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
} from 'konsta/react';

export default function Home() {

    let listBai = [
        {
        tenBai:"Yellow Submarine",
        nguoiHat:"Beatles",
        linkYoutube: "https://www.youtube.com/watch?v=07BWY00MzZc",
    } ,{
        tenBai:"Yellow Submarine",
        nguoiHat:"Beatles",
        linkYoutube: "https://www.youtube.com/watch?v=spNpLl9NslA",
    } ,{
        tenBai:"Yellow Submarine",
        nguoiHat:"Beatles",
        linkYoutube: "https://www.youtube.com/watch?v=lxPeCtiXor8",
    }
    ]

  return (
      <Page>
        <Navbar title="VNPT Đồng Tháp" />

        <Block strong>
          <p className="text-center font-bold p-1">
            CUỘC THI HÁT KARAOKE MỪNG THÀNH LẬP NGÀNH
          </p>
        </Block>

          <BlockTitle>Bài hát</BlockTitle>
          <List strongIos outlineIos>
              {

                  listBai.map(bai=>{
                      return(
                      <ListItem
                          link
                          href={"/baihat?tenBai=" + bai.tenBai}
                            chevronMaterial={false}
                          title={bai.tenBai}
                          after="$15"
                          subtitle={bai.nguoiHat}
                          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
                          media={
                              <iframe width="160" height="90"
                                      src={bai.linkYoutube.replace("watch?v=","embed/")}
                                      title="YouTube video player" frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen></iframe>
                          }
                      />)
                  })
              }

          </List>
      </Page>
  );
}