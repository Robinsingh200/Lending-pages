import './pay_method.css'

export const Pay_method = () => {

    return (
        <section className='pay_parents'>

            <div className='btn_pay_method_1'>
                <div className='btn_pay_method'>
                    <button>For individual</button>
                    <button>For Team</button>
                </div>
            </div>


            <main className='shitf_pay'>

                <nav className='pay_card'>
                    <div className='pay_card_1'>
                        <div>
                            <h3>Monthly</h3>

                            <span>₹ 500/mo</span>
                            <p>Billed monthly</p>
                        </div>

                        <button className=' btn_pay'>Learn More</button>

                        <div className='items_list'>
                            <ul>
                                <li>
                                    Free challenges</li>
                                <li>AI-powered solution feedback</li>
                                <li>5 Figma design files/month</li>
                                <li>
                                    2 premium challenges/month</li>
                                <li>
                                    Unlimited solution screenshots</li>
                                <li>
                                    Private solutions</li>
                                <li>
                                    Custom solution domains</li>
                                <li>View challenges solutions early</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pay_card_2'>
                        <div>
                            <div className='top_pay'>BESR VALUE</div>

                            <h3>Yearly</h3>

                            <span>₹ 333.33/mo</span>
                            <p>₹4,000 billed yearly (save 33% vs monthly)</p>
                        </div>

                        <button className='btn_pay'>Learn More</button>

                        <div className='items_list'>
                            <ul>
                                <li>
                                    Free challenges</li>
                                <li>AI-powered solution feedback</li>
                                <li>
                                    Unlimited Figma design files</li>
                                <li>
                                    2 premium challenges/month</li>
                                <li>

                                    Unlimited premium challenges</li>
                                <li>
                                    Private solutions</li>
                                <li>
                                    Custom solution domains</li>
                                <li>View challenges solutions early</li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </main>

            <div className='pay_all_images'>
                <div className='pay_images'>
                    <img src="./public/visa.webp" alt="" width={80} height={50} />
                    <img src="./public/maestro.webp" alt="" width={80} height={50} />
                    <img src="./public/mastercard.webp" alt="" width={80} height={50} />
                    <img src="./public/paypal.webp" alt="" width={80} height={50} />
                    <img src="./public/gpay.webp" alt="" width={80} height={50} />
                </div>
            </div>

        </section>
    )
}

