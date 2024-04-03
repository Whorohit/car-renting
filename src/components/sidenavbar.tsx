import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../data/menu.json'


const Sidenavbar:React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        
      };
  return (
    <div className='fixed  m-0 bg-white opacity-80 inset-0 flex justify-start  items-start flex-col z-40 hidden    px-3 '>
        
       <div>
       <Lottie 
         className='basis-1/4'
	    options={defaultOptions}
        height={40}
        width={40}
        
      />
      <div className='flex basis-3/4'/>
       </div>
        
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non ipsum mollitia inventore fugit est sequi sapiente cum voluptate. Veniam ea distinctio iusto vero obcaecati autem quo, eligendi quaerat cupiditate. Natus sed dicta asperiores vero, explicabo rerum labore, recusandae pariatur quos iste est nihil maiores qui quia doloremque, veniam mollitia quas repellendus. A id tempora dolorum hic tempore ut quas facere ducimus cupiditate magnam architecto libero reiciendis, quaerat facilis maxime obcaecati praesentium aut blanditiis culpa vero, accusantium iure inventore dolor recusandae. Maiores excepturi veritatis, quos nihil molestias nulla. Quia provident libero eos nulla id blanditiis ab, mollitia eveniet doloremque? Recusandae nesciunt commodi dignissimos laudantium quasi perspiciatis reprehenderit voluptas eligendi harum impedit placeat necessitatibus, et dolores ex consequatur veniam minima adipisci fuga, iure tenetur, quae mollitia optio. At soluta id suscipit voluptas exercitationem tempore cupiditate molestias provident voluptatum quibusdam ipsum excepturi eaque consequuntur recusandae consequatur iste nihil laborum, adipisci, libero assumenda maxime minus? Exercitationem non totam vero reprehenderit illo vitae, quia officia asperiores mollitia delectus commodi velit, quod facere iste incidunt. Voluptatibus odit rem nihil maxime sapiente dolore, et repellat sed laboriosam, odio voluptates, sit modi natus ex harum iste. Suscipit recusandae nemo tempore sunt assumenda consequuntur soluta provident quidem temporibus odit, quam alias beatae unde, neque autem nulla. Quia nostrum ea eum magni? Est placeat dolorum deserunt sapiente provident, facilis sequi praesentium doloribus error earum eaque necessitatibus eveniet pariatur, porro sit. Rerum et molestias libero repellat repudiandae corrupti sit! Numquam at sit provident tempora nisi est. Officiis corrupti explicabo commodi ullam neque aliquid quaerat, illum possimus quos? Itaque, illum. Perspiciatis laborum nisi vel ipsum, natus et doloremque impedit. Pariatur ut nam non at maiores libero modi voluptatum quas dicta neque minima, consequuntur, amet porro laboriosam perferendis incidunt omnis odit. Porro rerum, excepturi neque sunt eius eum tenetur aperiam dolores pariatur repellendus, similique a cupiditate, amet aut. Voluptatem quibusdam vitae, quam dolorem repellendus obcaecati consequatur deserunt provident voluptate ab autem vero quas magni corporis assumenda nam facilis. Quidem dolorem debitis ullam ab nesciunt autem? Exercitationem deleniti quidem consectetur assumenda repellendus fugiat, reprehenderit quasi et totam, ab asperiores perspiciatis rerum error voluptas dolorum nam obcaecati, earum pariatur harum voluptatum ex tempore molestiae? Omnis, maiores. Eveniet necessitatibus vitae incidunt cum facilis illum repellat libero optio expedita consequatur quos, cumque officiis amet quaerat odio tempora quis, aut deserunt! Magnam, asperiores. Consequuntur quaerat odit ducimus aut ab ipsum harum labore voluptatum quisquam! Ipsa dignissimos enim rem voluptate fuga repellendus est aut ullam labore maiores ad aspernatur obcaecati hic eum a minus eos deleniti odio totam, inventore rerum! Sequi excepturi repudiandae error impedit, ducimus modi omnis iste nostrum similique magnam, veritatis nihil incidunt dolor. Hic minima numquam distinctio quos deserunt nihil perspiciatis ex adipisci necessitatibus. Recusandae totam repellat id tenetur, blanditiis, odio sequi labore illum unde ducimus dolores quo, debitis maxime repellendus consequatur saepe aliquam aliquid voluptas quam eaque sapiente perferendis. Explicabo nulla provident est blanditiis qui harum numquam soluta consequuntur totam cumque pariatur quae doloribus itaque, vero exercitationem illo, alias, repudiandae sequi commodi natus temporibus? 
    </div>
  )
}

export default Sidenavbar