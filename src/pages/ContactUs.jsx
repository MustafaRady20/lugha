
import "./contact.css"
export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <h1>تواصل مع فريقنا</h1>
        <div className="contactForm">
          <div class="row text-end">
            <div class="col">
              <label htmlFor="firstname">الاسم </label>
              <input type="text" class="form-control" aria-label="First name" id='firstname' />
            </div>
          </div>
          <div className="row mt-3 text-end">
            <div class="col">
              <label htmlFor="email">عنوان البريد الالكتروني </label>
              <input type="text" class="form-control" aria-label="email" id='email' />
            </div>
          </div>
          <div className="row mt-3 text-end">
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
              <label htmlFor="floatingTextarea" className="textAreaLabel"> يمكنك التواصل مع فريقنا من خلال ارسال رسالة عبر البريد  الالكتروني</label>
            </div>
            <div className="col ">
              <button className='btn btn-info mt-3 '>ارسال </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
