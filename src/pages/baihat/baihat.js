import React, {useEffect, useState} from 'react';
import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    BlockTitle,
    Progressbar,
    Segmented,
    SegmentedButton, Button,
} from 'konsta/react';
import {useSearchParams} from "next/navigation";

export default function ProgressbarPage() {
    const [progress, setProgress] = useState(0);
    const searchParams = useSearchParams()
    const tenBai = searchParams.get('tenBai')
    console.log(tenBai)

    useEffect( () => {
        try {
            let your_vercel_api_token_here="ff8c1299-9cba-483b-9b03-a394d0ee9858";
            const createEdgeConfig =  fetch(
                'https://api.vercel.com/v1/edge-config',
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${your_vercel_api_token_here}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        slug: 'baihat',
                    }),
                },
            );
            const result =  createEdgeConfig.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    },[])

    return (
        <Page>
            <Navbar
                left={
                    <NavbarBackLink text="Back" onClick={() => history.back()} />
                }
                title={tenBai}
            />

            <BlockTitle>Cham Diem</BlockTitle>
            <Block strong insetMaterial outlineIos>
                <div className="my-4">
                    <Progressbar progress={progress} />
                </div>
                <Segmented raised>
                    <SegmentedButton
                        rounded
                        active={progress === 0.1}
                        onClick={() => setProgress(0.1)}
                    >
                        1
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.2}
                        onClick={() => setProgress(0.2)}
                    >
                        2
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.3}
                        onClick={() => setProgress(0.3)}
                    >
                        3
                    </SegmentedButton>
                </Segmented>
                <br/>
                <Segmented raised>
                    <SegmentedButton
                        active={progress === 0.4}
                        onClick={() => setProgress(0.4)}
                    >
                        4
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.5}
                        onClick={() => setProgress(0.5)}
                    >
                        5
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.6}
                        onClick={() => setProgress(0.6)}
                    >
                        6
                    </SegmentedButton>
                </Segmented>
                <br/>
                <Segmented raised>
                    <SegmentedButton
                        active={progress === 0.7}
                        onClick={() => setProgress(0.7)}
                    >
                        7
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.8}
                        onClick={() => setProgress(0.8)}
                    >
                        8
                    </SegmentedButton>
                    <SegmentedButton
                        active={progress === 0.9}
                        onClick={() => setProgress(0.9)}
                    >
                        9
                    </SegmentedButton>
                </Segmented>
            </Block>
            <Block strong className="flex space-x-4">
                <Button>Cham diem</Button>
            </Block>

        </Page>
    );
}