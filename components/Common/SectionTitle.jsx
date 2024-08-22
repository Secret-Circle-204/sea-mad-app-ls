export default function SectionTitle ({ center }) {
  const width = '570px'
  const mb = '100px'
  // const center = false
  // const title = 'Why you have to come on our live-aboard?'
  // const paragraph =
  // 'is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.  interactive panel discussions and roundtables.'
  return (
    <div
      className={`wow fadeInUp w-full ${center ? 'mx-auto text-center' : ''}`}
      data-wow-delay='.1s'
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className='mb-4 text-3xl font-bold !leading-tight text-blue3 dark:text-white sm:text-4xl md:text-[45px]'>
        Why you have to come on our live-aboard?
      </h2>
      <p className='text-base !leading-relaxed text-body-color md:text-lg'>
        is to focus on educating attendees on how to best protect highly
        vulnerable business applications with interactive panel discussions and
        roundtables.
      </p>
    </div>
  )
}
