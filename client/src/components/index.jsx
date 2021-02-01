

import React,{Component} from 'react';


function Index(){

    return(
        <div className="">

{/*nav here*/}
<nav className="nav">
    <div className="nav-menu flex-row">
        <div className="nav-brand">
            <a href="/" className="brand text-grey">Blogger</a>
        </div>
        <div className="toggle-collapse">
            <div className="toggle-icons">
                <i className="fas fa-bars"></i>
            </div>
        </div>
        <div>
            <ul className="nav-items">
                <li className="nav-link">
                    <a href="/" className="#">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="#">Contact us</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="#">Gallery</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="#">Archives</a>
                </li>
                <li className="nav-link">
                    <a href="/" className="#">login</a>
                </li>
            </ul>
        </div>
        <div className="social text-grey">
            <a href="/"><i className="fab fa-facebook blue"></i></a>
            <a href="/"><i className="fab fa-youtube red"></i></a>
            <a href="/"><i className="fab fa-instagram red"></i></a>
            <a href="/"><i className="fab fa-twitter blue"></i></a>
        </div>
    </div>
</nav>
    
{/*nav bar end here*/}    


{/*main section here*/}
<main>
{/*site title here*/}
    <section className="site-title">
        <div className="site-background">
            <h3>Tours and Travels</h3>
            <h1>Amazing Places in Earth</h1>
            <button type="button" className="btn">Explore</button>
        </div>
    </section>



{/*blog carousel here*/}
    <section>
        <div className="blog">
            <div className="container">
                <div className="owl-carousel owl-theme blog-carousel">
                    <div className="blog-content">
                        <img src="./assets/Blooger_Assets/assets/Blog-post/post-1.jpg" alt="post"/>
                        <div className="blog-title">
                            <h3>London fashion is in verge of evolution! </h3>
                            <button className="btn btn-blog">Fashion</button>
                            <span>2 minutes</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <img src="./assets/Blooger_Assets/assets/Blog-post/post-2.jpg" alt="post"/>
                        <div className="blog-title">
                            <h3>London fashion is in verge of evolution! </h3>
                            <button className="btn btn-blog">Fashion</button>
                            <span>2 minutes</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <img src="./assets/Blooger_Assets/assets/Blog-post/post-3.jpg" alt="post"/>
                        <div className="blog-title">
                            <h3>London fashion is in verge of evolution! </h3>
                            <button className="btn btn-blog">Fashion</button>
                            <span>2 minutes</span>
                        </div>
                    </div>
                   {/*  
                    <div className="blog-content">
                        <img src="./assets/Blooger_Assets/assets/Blog-post/post-4.png" alt="post"/>
                        <div className="blog-title">
                            <h3>London fashion is in verge of evolution! </h3>
                            <button className="btn btn-blog">Fashion</button>
                            <span>2 minutes</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <img src="./assets/Blooger_Assets/assets/Blog-post/post-5.png" alt="post"/>
                        <div className="blog-title">
                            <h3>London fashion is in verge of evolution! </h3>
                            <button className="btn btn-blog">Fashion</button>
                            <span>2 minutes</span>
                        </div>
                    </div> */}
                    
                </div>
               {/*  <div className="owl-navigation">
                    <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                    <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
                  
                </div> */}
                
            </div>
        </div>
    </section>
{/*blof carousel end here*/}

{/*site here*/}
<section className="container">
    <div className="site-content">
        <div className="posts">
            <div className="post-content">
                <div className="post-image">
                    <div>
                        <img src="./assets/Blooger_Assets/assets/Blog-post/blog1.png" alt="blog1"/>
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-grey"></i>&nbsp;&nbsp;Admin</span>
                        <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                        <span>&nbsp;&nbsp;2 comments</span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="/">Why should Boys should have all the fun? It's the woman who are making india an alcohol loving country.</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores distinctio reiciendis at itaque omnis earum odio porro ipsa assumenda sunt officia deleniti, doloribus expedita rem suscipit nemo sapiente in vel hic ab deserunt aliquam! Possimus ipsam quidem dicta provident voluptas veritatis dolore aut asperiores!</p>
                    <button className="btn post-btn">Read more &nbsp;<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                    <div>
                        <img src="./assets/Blooger_Assets/assets/Blog-post/blog3.png" alt="blog3"/>
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-grey"></i>&nbsp;&nbsp;Admin</span>
                        <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                        <span>&nbsp;&nbsp;2 comments</span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="/">Why should Boys should have all the fun? It's the woman who are making india an alcohol loving country.</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores distinctio reiciendis at itaque omnis earum odio porro ipsa assumenda sunt officia deleniti, doloribus expedita rem suscipit nemo sapiente in vel hic ab deserunt aliquam! Possimus ipsam quidem dicta provident voluptas veritatis dolore aut asperiores!</p>
                    <button className="btn post-btn">Read more &nbsp;<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                    <div>
                        <img src="./assets/Blooger_Assets/assets/Blog-post/blog2.png" alt="blog2"/>
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-grey"></i>&nbsp;&nbsp;Admin</span>
                        <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                        <span>&nbsp;&nbsp;2 comments</span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="/">Why should Boys should have all the fun? It's the woman who are making india an alcohol loving country.</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores distinctio reiciendis at itaque omnis earum odio porro ipsa assumenda sunt officia deleniti, doloribus expedita rem suscipit nemo sapiente in vel hic ab deserunt aliquam! Possimus ipsam quidem dicta provident voluptas veritatis dolore aut asperiores!</p>
                    <button className="btn post-btn">Read more &nbsp;<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                    <div>
                        <img src="./assets/Blooger_Assets/assets/Blog-post/blog4.png" alt="blog4"/>
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-grey"></i>&nbsp;&nbsp;Admin</span>
                        <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                        <span>&nbsp;&nbsp;2 comments</span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="/">Why should Boys should have all the fun? It's the woman who are making india an alcohol loving country.</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores distinctio reiciendis at itaque omnis earum odio porro ipsa assumenda sunt officia deleniti, doloribus expedita rem suscipit nemo sapiente in vel hic ab deserunt aliquam! Possimus ipsam quidem dicta provident voluptas veritatis dolore aut asperiores!</p>
                    <button className="btn post-btn">Read more &nbsp;<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="pagination flex-row">
                <a href="/"><i className="fas fa-chevron-left"></i></a>
                <a href="/" className="page">1</a>
                <a href="/" className="page">2</a>
                <a href="/" className="page">3</a>
                <a href="/"><i className="fas fa-chevron-right"></i></a>
            </div>
        </div>
        <aside className="sidebar">
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li className="list-items">
                        <a href="/">Software</a>
                        <span>(05)</span>
                    </li>
                    <li className="list-items">
                        <a href="/">Technology</a>
                        <span>(03)</span>
                    </li>
                    <li className="list-items">
                        <a href="/">Lifestyle</a>
                        <span>(05)</span>
                    </li>
                    <li className="list-items">
                        <a href="/">Shopping</a>
                        <span>(04)</span>
                    </li>
                    <li className="list-items">
                        <a href="/">Food</a>
                        <span>(08)</span>
                    </li>
                </ul>
            </div>
            <div className="popular-post">
                <h2>Popular Post</h2>
                <div className="post-content">
                    <div className="post-image">
                        <div>
                            <img src="./assets/Blooger_Assets/assets/popular-post/m-blog-1.jpg" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>&nbsp;&nbsp;2 comments</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <a href="/">New System has been installed in the market ... </a>
                        
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-image">
                        <div>
                            <img src="./assets/Blooger_Assets/assets/popular-post/m-blog-2.jpg" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>&nbsp;&nbsp;2 comments</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <a href="/">New System has been installed in the market ... </a>
                        
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-image">
                        <div>
                            <img src="./assets/Blooger_Assets/assets/popular-post/m-blog-3.jpg" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>&nbsp;&nbsp;2 comments</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <a href="/">New System has been installed in the market ... </a>
                        
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-image">
                        <div>
                            <img src="./assets/Blooger_Assets/assets/popular-post/m-blog-4.jpg" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>&nbsp;&nbsp;2 comments</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <a href="/">New System has been installed in the market ... </a>
                        
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-image">
                        <div>
                            <img src="./assets/Blooger_Assets/assets/popular-post/m-blog-5.jpg" alt="blog1"/>
                        </div>
                        <div className="post-info flex-row">
                            <span><i className="fas fa-calendar-alt text-grey"></i>&nbsp;&nbsp;January 14,2020</span>
                            <span>&nbsp;&nbsp;2 comments</span>
                        </div>
                    </div>
                    <div className="post-title">
                        <a href="/">New System has been installed in the market ... </a>
                        
                    </div>
                </div>
                
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <form action="#">
                        <div className="form-element">
                            <input type="text" className="input-element" placeholder="Email" name="Email" required/>
                            <button className="btn form-btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>

                <div className="popular-tags">
                    <h2>Popular-tags</h2>
                    <div className="tags flex-row">
                        <span className="tag btn">Software</span>
                        <span className="tag btn">Technology</span>
                        <span className="tag btn">Travels</span>
                        <span className="tag btn">Illustration</span>
                        <span className="tag btn">Design</span>
                        <span className="tag btn">Lifestyle</span>
                        <span className="tag btn">Love</span>
                        <span className="tag btn">Project</span>
                    </div>
                
                </div>
            </div>
        </aside>
    </div>
</section>
{/*site end here*/}
</main>
{/*main end here*/}

{/*footer here*/}
<footer className="footer">
    <div className="container">
        <div className="about-us">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus non eligendi consequuntur consectetur eius impedit officiis maxime rerum architecto harum?</p>
        </div>
        <div className="newsletter">
            <h2>Newsletter</h2>
            <p>Stay update with our latest</p>
            <div className="form-element">
                <input type="text" placeholder="Email"/><span><i className="fas fa-chevron-right"></i></span>
            </div>
        </div>
        <div className="instagram">
            <h2>Instagram</h2>
            <div className="flex-row">
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card3.png" alt="instagram_pic"/>
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card4.png" alt="instagram_pic"/>
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card5.png" alt="instagram_pic"/>
            </div>
            <div className="flex-row">
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card6.png" alt="instagram_pic"/>
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card7.png" alt="instagram_pic"/>
                <img src="./assets/Blooger_Assets/assets/instagram/thumb-card8.png" alt="instagram_pic"/>
            </div>
        </div>
        <div className="follow">
            <h2>Follow us</h2>
            <p>Let us be Social</p>
            <div>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div className="rights flex-row">
        <h4 className="text-grey">
            Copyright ©2019 All rights reserved |made by
            <a href="/">Anjan Poudel</a>
        </h4>
    </div>
    <div className="move-up">
        <span><i className="fas fa-arrow-circle-up"> Scroll-up</i></span>
    </div>
</footer>

{/*footer end*/}


        </div>
    )
}

export default Index