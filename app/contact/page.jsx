import Breadcrumb from '@/components/Common/Breadcrumb'
import Contact from '@/components/Contact'
import Calendar from '@/components/Calendar'
const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName='Contact Page'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.'
      />

      {/* <div className='container max-w-[1200px] mx-auto'>
        <Calendar />
      </div> */}
      <Contact />
    </>
  )
}

export default ContactPage
