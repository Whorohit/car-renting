import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Newscard from './News/Newscard'
import Spinner from './Spinner'
import Lottie from 'lottie-react'

type Props = {
    data: any
    next: () => void;
    hasmore?: boolean;
    dataLength:number;
    children: React.ReactNode;
    className?:string;

}

const InfinteSrcoll: React.FC<Props> = ({ data=[], next, hasmore
,dataLength=10,children,className
}) => {
    
    const hasMore = hasmore !== undefined ? hasmore : data?.length <= 100;
    
    return (
        <InfiniteScroll
            dataLength={dataLength}
            next={next}
            style={{ width: `${className?"100%":"200%"}`, display: 'flex', flexDirection: 'column',justifyContent:"center",alignItems:"center",gap:"1rem" }} //To put endMessage and loader to the top.
            //

            endMessage={
                <p style={{ textAlign: 'center' }} className='text-2xl  text-blue-400  tracking-wider font-bold '>
                    The End
                </p>
            }
            className={className?className:""}
            hasMore={hasMore}
            loader={<h1 className='text-center flex justify-center '>
                <Spinner/>
            </h1>}
            scrollableTarget="scrollableDiv"
        >
{children}
            
                {/* {
                    data?.map((item: Record<string, any>) => {
                        return (<Newscard data={item} />)
                    })
                } */}
            
        </InfiniteScroll >

    )
}

export default InfinteSrcoll