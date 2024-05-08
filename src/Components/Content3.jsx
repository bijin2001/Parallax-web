import React, { useRef, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax';
import cimg1 from '../assets/cimg1.jpg'
import cimg2 from '../assets/cimg2.jpg'
import cimg3 from '../assets/cimg3.jpg'
import cimg4 from '../assets/cimg4.jpg'
import rock from '../assets/rock.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../App.css'


function Content3() {

  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0,
      // scale: 0.8
    }, {
      translateX: "-300vw",
      // scale: 1.1,
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "5000 top",
        scrub: 2,
        pin: true

      }
    });

    return () => {

      pin.kill()
    }
  }, [])

  return (
    <>
      <div className='cont' style={{ marginTop: '22em' }}>
        <div style={{ marginTop: '13em' }}>
          <h1 className='text-center' style={{ fontSize: '7em', fontWeight: '700', color: '#fc1c14' }}>Gallery</h1>
        </div>

        <Parallax scale={[1.2, 0.5, 'easeInQuad']}>
          <div style={{ marginTop: '3em' }}>

            <img src={rock} style={{ width: '92em', height: '42em',objectFit:'cover'}} alt="" />

          </div>
        </Parallax>

        <div>

          <div ref={triggerRef}>
            <div ref={sectionRef} className='scrollImaIn container'>

              <div className='scrollIma mt-5'>
                <img src={cimg1} style={{ width: '92em', height: '50%' }} alt="" />
              </div>


              <div className='scrollIma mt-5'>
                <img src={cimg2} style={{ width: '92em', height: '50%', objectFit: 'cover' }} alt="" />
              </div>

              <div className='scrollIma mt-5'>
                <img src={cimg3} style={{ width: '92em', height: '50%', objectFit: 'cover' }} alt="" />
              </div>

              <div className='scrollIma mt-5'>
                <img src={cimg4} style={{ width: '92em', height: '50%', objectFit: 'cover' }} alt="" />
              </div>
            </div>

          </div>

        </div>

        {/* <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus modi dicta? Vitae laboriosam consectetur modi harum velit nesciunt ex reprehenderit quae. Neque possimus iure recusandae totam vero impedit soluta.
          Maxime perspiciatis veniam tenetur dicta provident ut maiores ipsa earum quisquam quae iusto quis unde, ex, eaque aliquid cum? Sit aliquid quasi sapiente fugiat ipsa modi corporis possimus aliquam iusto?
          Harum dicta esse quidem? Vero repellat culpa repudiandae dignissimos. Omnis illo veritatis magni cum perspiciatis dicta sint commodi aspernatur rem voluptatem dolore laboriosam totam architecto, sit impedit officiis cupiditate necessitatibus?
          Tenetur numquam molestiae eaque tempora magnam ipsum corrupti quam aperiam beatae. Blanditiis, ipsam? Cupiditate accusantium voluptates odio veritatis quidem a id! Quis illum dolorum fugiat libero, ducimus minima deserunt qui?
          Praesentium, in esse! Iusto, ut. Quas expedita id quaerat atque itaque voluptate soluta quod? Numquam quas quae tenetur doloribus error quia, culpa adipisci iusto ipsa, modi, voluptatibus magnam voluptatum asperiores!
          Ipsum ea doloremque nisi veritatis magnam perspiciatis. Eaque velit doloribus iusto obcaecati quo nulla unde maxime quia? Minus perspiciatis, labore sed magnam quas totam quasi corporis, reiciendis, nihil quia repudiandae.
          Cupiditate corporis sapiente corrupti doloremque repellat, error obcaecati ullam animi magni delectus sint aliquam odio neque ipsum illum qui minima ratione ducimus, pariatur consequatur illo voluptates rem? Totam, minus ipsam?
          Quam magnam modi nostrum saepe cum! Eaque, ut debitis corporis voluptates fuga nesciunt iste unde laboriosam, sed doloremque tempora consectetur esse nisi. Obcaecati consequatur, consectetur beatae atque molestias officia enim.
          Repellendus aperiam alias deserunt! Debitis qui odio voluptatum, ab laborum nulla, magni assumenda possimus omnis iusto eaque. Ullam ab molestias eligendi reprehenderit voluptate commodi, veritatis officiis, cum, provident nesciunt dolorum!
          Sapiente minima ab, similique et consectetur pariatur sit unde optio maxime praesentium veniam illum? Ad culpa quas natus qui beatae molestias eius exercitationem, aliquam sapiente earum eos. Illo, odit laboriosam?
          Placeat enim ex earum reiciendis fugiat non veniam magnam quae, nesciunt assumenda ipsa commodi! Nam atque architecto similique, fuga sit dignissimos omnis cupiditate ipsum quo, distinctio, eaque odit nobis accusantium.
          Sint, possimus. Natus nobis neque veniam aperiam voluptatem, vel possimus iusto blanditiis cupiditate iste laboriosam tempora amet laudantium provident autem pariatur aliquam esse dicta asperiores obcaecati adipisci? Reprehenderit, quasi quas?
          Nam assumenda facere corporis asperiores eligendi repellendus delectus molestiae, vero accusamus vel dolore. Eligendi molestiae fuga perspiciatis. Distinctio laboriosam hic qui eos cumque blanditiis exercitationem modi, voluptatem deserunt non consectetur!
          Eveniet, magnam? Dolor eaque illum accusantium magni facilis a aut mollitia ex, voluptatum maxime illo inventore suscipit eius at delectus nam accusamus quas consequatur. Cupiditate reiciendis sapiente debitis at! Enim.
          Aut ipsam, dolore at corporis blanditiis aperiam sed, ad debitis reprehenderit ducimus quia quibusdam ratione ullam asperiores aliquam veniam laboriosam culpa omnis natus quod aspernatur ut. Suscipit officiis quia ratione!
          Fugit reprehenderit sequi ipsam neque aut, adipisci alias obcaecati consectetur voluptate maxime esse sint voluptatem soluta excepturi iure dolorum suscipit, praesentium veritatis eaque similique! Dolor laboriosam sapiente odit incidunt natus.
          Nam animi quidem facere delectus laborum voluptas officia commodi, doloribus recusandae reprehenderit culpa cupiditate molestias quam sequi magnam repellendus, doloremque eveniet quod assumenda quas veritatis quaerat minima ratione odio? Fugiat?
          Quisquam deserunt, maiores officia enim quibusdam soluta accusantium quidem quia blanditiis, quos aut labore neque? Ex beatae explicabo iusto tempora dolorem atque accusantium, ratione optio sint nam nesciunt obcaecati possimus.
          Sunt, consequuntur atque? Earum sit harum veniam eveniet. Praesentium delectus, corrupti neque consequatur voluptates eos maiores autem labore quibusdam pariatur esse dolor illo. Officiis veritatis inventore delectus beatae sunt velit.
          Culpa, officiis delectus nobis nostrum officia porro quos quasi dolorum, dicta rerum cum quibusdam blanditiis, illum non! Expedita iste veritatis, neque fugiat, esse voluptatum itaque similique quidem voluptatibus tempore accusamus.
          Qui in eligendi corrupti accusamus, iusto consequuntur? Libero illo, suscipit animi nisi molestiae quos possimus cum rerum eius eligendi quaerat modi enim ad nemo impedit dolorem sapiente voluptas quis praesentium?
          Ipsa pariatur earum tempora atque consequatur quam, quibusdam natus architecto aperiam soluta possimus id modi minima eaque minus doloribus at ad voluptates error temporibus quas. Maiores sit vero autem recusandae.
          Cumque magnam impedit, sint officia ad ratione eius incidunt beatae nisi laboriosam neque odio necessitatibus. Laborum perferendis nam excepturi itaque atque, qui fugit ab cum distinctio error, sapiente labore incidunt?
          At, praesentium illum veritatis nulla rem inventore laborum vel. Ullam blanditiis, placeat officiis sint sed veniam, magnam, expedita ad iure adipisci nesciunt eum. Id, quaerat quos repellat pariatur nulla nam.
          Esse, possimus nobis libero modi laudantium molestiae magnam voluptate eius perferendis assumenda nam pariatur corrupti blanditiis quae voluptates facere temporibus id quibusdam. Libero veniam nulla, modi illo sint voluptate soluta!
          Totam exercitationem, pariatur, id ratione tenetur excepturi aspernatur alias commodi natus dolore molestiae harum tempore corrupti sunt nostrum dolores dignissimos molestias sed minus, minima reprehenderit in! Dolores eveniet aliquam in!
          Eum, rerum ratione hic explicabo facilis architecto esse! Voluptatum ipsa laborum rem dicta nihil molestias optio sequi, libero culpa odio expedita saepe placeat, doloribus excepturi. Architecto ipsum tempora soluta hic.
          Libero labore, rerum perferendis ut, iure dolorem, natus sed non blanditiis commodi nam. Sint quibusdam mollitia illo rem expedita quam recusandae. Eveniet non minima ipsa temporibus, magni quaerat ad dolorem.
          Repellat, architecto? Iure dolores autem repellat sint commodi quia optio dolorem quibusdam dolore possimus soluta, voluptatibus adipisci, animi quas maxime voluptas repellendus sapiente. Reiciendis ipsa recusandae quibusdam numquam. Temporibus, natus!
          Facilis nisi corporis dolor odit hic, quae porro cupiditate iure dicta dolores voluptates cum earum vitae delectus quos voluptatem iste reiciendis sed ullam et ipsum, non minima. Similique, reiciendis qui!
          Voluptates deleniti similique voluptas mollitia rerum accusamus nam, ea consequatur tempora veniam exercitationem corrupti modi error, ipsam, quis non officia perspiciatis. Culpa deserunt maxime architecto dolore ipsa explicabo molestiae placeat?
          Aspernatur ipsum harum nam libero adipisci omnis debitis atque nihil excepturi ducimus quos vitae rerum quibusdam officiis sit ullam voluptatum id, ad totam ex voluptatibus saepe vero obcaecati! Voluptatum, eveniet!
          Id architecto adipisci earum quos autem similique ut corrupti. Doloribus nulla esse ratione dolor minima qui, eveniet delectus, impedit maxime mollitia quod enim facere ipsa tempore necessitatibus? Soluta, corrupti illo.
          Maxime non excepturi similique consequuntur delectus qui nostrum expedita. Assumenda voluptates recusandae aut odit soluta? Hic natus similique, eligendi sed qui ratione sint minus sunt, aliquid facilis ut at asperiores!
          Doloribus, molestias pariatur debitis vitae saepe aspernatur earum eos! Quaerat saepe rem numquam iste expedita mollitia eos delectus laboriosam in hic voluptate, quidem cum, obcaecati officiis repudiandae aperiam impedit. Repudiandae?
          Asperiores repellendus quos dignissimos sapiente reprehenderit fugiat aspernatur at modi corrupti vitae voluptatem beatae itaque earum ea, minima voluptas? Natus exercitationem repellendus voluptatum accusantium doloribus corporis, fuga mollitia magni amet.
          Vero culpa dicta cupiditate quis perferendis mollitia unde, repudiandae porro quam ipsam dolores reiciendis molestias sint dolorem natus incidunt veniam. Accusamus nihil ipsum est nisi id illo, dolorem doloremque libero.
          Eum voluptatem deleniti perspiciatis molestiae, assumenda expedita, voluptatibus omnis ea voluptas natus minus. Dicta reprehenderit nostrum assumenda corporis, dolore nesciunt consectetur enim corrupti quis ipsum odio, vero amet placeat quaerat!
          Totam eius ex assumenda nisi iusto laborum beatae fugit ipsa fugiat, provident vero quisquam, dolorem at sint aperiam corporis iure reprehenderit illo aspernatur neque aliquid dolorum porro esse. Fugiat, harum.
          Tempore quia iste optio, sit architecto quis illum omnis neque, et obcaecati corrupti ex culpa aspernatur. Voluptatem obcaecati rerum quo delectus alias doloremque natus reprehenderit nisi, hic, accusantium eos laudantium.
          Quia a quas architecto nam voluptas sit quam porro odit vero eos rem corrupti omnis id fugit, modi mollitia? Quos nihil tempora quaerat? Quod iusto iste debitis animi perspiciatis corporis?
          Illum iure ut in, rerum qui facilis a. Cum deserunt laboriosam labore quod, deleniti atque quibusdam minus? Ea blanditiis maiores aliquam tempore suscipit deleniti laudantium. Non commodi sunt repellendus id?
          Ad, accusantium distinctio omnis dolorem labore vitae exercitationem similique saepe fuga natus eveniet illum, provident quisquam dolorum tempore sit error. Enim quidem tempore nihil cupiditate voluptatem beatae facere eveniet quod.
          Pariatur laboriosam explicabo asperiores, inventore sequi at repudiandae voluptas placeat adipisci, magnam ipsum iure temporibus, veritatis sed quod itaque. Quis incidunt, dignissimos consequuntur sequi distinctio necessitatibus ex nihil quod blanditiis?
          Animi quo eaque ut atque ullam sequi, nulla sed nobis, facilis, magni eligendi. Asperiores laudantium possimus enim fugit! Labore rerum itaque earum nesciunt quisquam fugiat optio laborum maiores repudiandae modi!
          Odio hic sint tenetur repellendus. Cupiditate quibusdam, nobis vitae vel reprehenderit ut amet repellendus, ipsam laudantium corrupti fugit numquam optio ipsum adipisci officiis sapiente sunt hic labore illo natus odio?
          Nam ab placeat minima nihil quae laboriosam, repellendus ullam cum et esse ipsam iure ipsum impedit soluta ea excepturi sit! Laudantium, earum corrupti officiis eius sed dolor eos eum enim.
          Voluptatibus delectus, maiores, rem mollitia eos magnam quas dolorum impedit, repudiandae quibusdam corrupti autem velit! Libero facere quas ipsa molestias repellat, quod rerum suscipit fuga ab, nulla omnis odio iste?
          Doloribus, sed aut! Nulla vitae illo numquam delectus eos! Consequatur non dicta facere reprehenderit ipsum vitae dolor magni numquam eaque nisi vel ab esse, minima soluta, perferendis tempora, magnam possimus?
          Tempora ullam deleniti labore quidem quaerat blanditiis ut qui atque nam optio asperiores, ab repellendus adipisci quasi earum libero debitis aut tenetur sed, quae nesciunt eligendi unde nihil eum? Nulla?
        </div> */}
      </div>
    </>
  )
}

export default Content3