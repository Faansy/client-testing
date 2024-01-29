import { useContext } from 'react';
import dayjs from 'dayjs';
// dayjs.extend(relativeTime);
import { Link } from 'react-router-dom';
import { route } from '@/routes';
import { usePosts } from '@/hooks/usePosts.jsx';
import { usePost } from '@/hooks/usePost.jsx';
// import { useBookmarks } from '@/hooks/useBookmarks.jsx';
import { useBookmark } from '@/hooks/useBookmark.jsx';
import { usePostcomment } from '@/hooks/usePostcomment.jsx';
import { usePostlike } from '@/hooks/usePostlike.jsx';
import { useTip } from '@/hooks/useTip.jsx';
import Layout from '@/components/private/Layout.jsx';
import AuthContext from '@/context/AuthContext.jsx';
import Logo from '@/assets/images/logo.png';
import MissingImage from '@/assets/images/name_non-transparent.png';


export default function Index() {
    const { posts, getPosts } = usePosts();
    const { post, createPost, destroyPost } = usePost();
    const { postcomment, createPostcomment, destroyPostcomment } = usePostcomment();
    const { postlike, createPostlike, destroyPostlike } = usePostlike();
    const { tip, createTip, destroyTip } = useTip();
    const { bookmark, createBookmark, destroyBookmark } = useBookmark();
    const { user } = useContext(AuthContext);

    console.log(user)

    console.log(posts);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('body', post.data.body);
        formData.append('image_url', post.data.image_url);
        formData.append('user_id', user.id);

        await createPost(formData)
        await getPosts();
    }

    async function commentOnPost(event) {
        event.preventDefault();

        const user_id = event.target.user_id.value;
        const post_id = event.target.post_id.value;
        const body = event.target.body.value;

        await createPostcomment(user_id, post_id, body);
        await getPosts();

        body = '';
    }

    async function likePost(event) {
        event.preventDefault();

        const user_id = event.target.user_id.value;
        const post_id = event.target.post_id.value;

        await createPostlike(user_id, post_id);
        await getPosts();
    }

    async function sendTip(event) {
        event.preventDefault();

        const creator_id = event.target.creator_id.value;
        const subscriber_id = event.target.subscriber_id.value;
        const amount = event.target.amount.value;

        await createTip(creator_id, subscriber_id, amount);
        await getPosts();
    }

    async function addBookmark(event) {
        event.preventDefault();

        const user_id = event.target.user_id.value;
        const post_id = event.target.post_id.value;

        createBookmark(user_id, post_id);
    }

    function openImageWindow(){
        document.getElementById("image_url").click();
        console.log();
    }

    return (
        <Layout>
            <section className="col-sm-10 col-md-5 card rounded-0">
                <div className="position-sticky top-0 d-flex justify-content-between align-items-center pt-3 pb-2 px-3 bg-white border-bottom z-3">
                    <h1 className="text-uppercase fs-5 fw-bold">Home</h1>
                    <span className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16">
                            <path
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </span>
                </div>

                <div>
                    <div className="mb-1">
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                name="body" 
                                id="body" 
                                value={ post.data.body ?? '' }
                                onChange={ event => post.setData({
                                    ...post.data,
                                    body: event.target.value,
                                }) }
                                className="form-control border-bottom-0 rounded-0" 
                                rows="3" 
                                placeholder="Compose new post ..."></textarea>
                            <div className="d-flex justify-content-between px-3 pt-2 pb-3 border-bottom">
                                <div className='d-flex column-gap-3'>
                                    <span>
                                        <div className="text-decoration-none text-secondary">
                                            <input 
                                                type="file" 
                                                accept="image/*"
                                                name="image_url" 
                                                id="image_url" 
                                                onChange={ event => post.setData({
                                                    ...post.data,
                                                    image_url: event.target.files[0],
                                                }) }
                                                hidden='hidden' />
                                            <svg onClick={ openImageWindow } xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                                            </svg>
                                            {/* <span>{ post.data.image_url }</span> */}
                                        </div>
                                    </span>
                                    <span>
                                        <a href="" className="text-decoration-none text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <button 
                                        type='submit' 
                                        className='btn btn-sm btn-faansy-red text-light'>Add New Post
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <section className="mb-1 border px-3 py-2 d-flex column-gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#820303" className="bi bi-dark-circle"
                                viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                        </span>
                        <div>
                            <p>Dear { `${user.first_name} ${user.last_name}` },</p>
                            <p>We've updated our Privacy Policy, which can be viewed <a href="" className="text-decoration-none text-faansy-red">here</a>.</p>
                            <p>At OnlyFans, we respect your privacy. We are committed to protecting your personal data and being transparent about how
                            it is used.</p>
                            <p>The key updates include more information about:</p>
                            <p>- the personal data we collect, why we collect it and why we share it.</p>
                        </div>
                    </section>
                    
                    <section className="border-top">
                        {(posts.length > 0) ? posts.map(post => {
                            return (
                                <article key={ post.id } className="card border-0 border-top border-bottom pb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between mb-3">
                                            <div className="d-flex justify-content-start align-items-center column-gap-2">
                                                <div className="rounded-circle">
                                                    <img src={ Logo } alt="" width="65" />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h3 className="card-title fs-5">
                                                        <span>{ `${ post.user.first_name } ${ post.user.last_name }` }</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-patch-check mb-1" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd"
                                                                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                                            <path
                                                                d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                                                        </svg>
                                                    </h3>
                                                    <span className="text-body-secondary">@{ post.user.username }</span>
                                                </div>
                                            </div>
                            
                                            <div className="d-flex column-gap-3">
                                                <span className="text-body-secondary">{dayjs(post.created_at).format('MMM D, YYYY HH:mm')}</span>
                                                {/* <span className="text-body-secondary">{ dayjs(post.created_at).fromNow() }</span> */}
                                                {/* <span className="text-body-secondary">9 hours ago</span> */}
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#4c5661" className="bi bi-three-dots"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                            
                                        <p className="card-text">{ post.body }</p>
                                        <p>
                                            {/* {
                                                function replaceAts() {
                                                var replacer = function(match) {
                                                    var id = match.substr(1);

                                                    return `<a href="https://twitter.com/${id}" target="_blank">${id}</a>`;
                                                };

                                                for (var i = 0; i < list.length; i++) {
                                                    list[i] = list[i].replace(/@\w+/g, replacer);
                                                }
                                                }

                                                replaceAts();

                                                console.log(list);
                                            } */}
                                        </p>
                                        {/* <span><a href="" className="text-decoration-none text-faansy-red">onlyfans.com/natalie.brooks</a> / <a href="" className="text-decoration-none text-faansy-red">onlyfans.com/natalie.brooks</a></span> */}
                                    </div>
                                    {/* <video controls width="250" className="card-img-bottom rounded-0" alt="video title">
                                        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
                                        <source src="../videos/spicy_tofu(720p).mp4" type="video/mp4" />
                                        Download the
                                        <a href="/media/cc0-videos/flower.webm">WEBM</a>
                                        or
                                        <a href="../videos/spicy_tofu(720p).mp4">MP4</a>
                                        video.
                                    </video> */}
                                    <img src={ post.image_url ? `http://localhost:8000/storage/${post.image_url}` : MissingImage }  className="card-img-bottom rounded-0" alt="..." />
                                    {/* <div className="card-img-bottom rounded-0">
                                        <img 
                                            src={ `http://localhost:8000/storage/${post.image_url}`} 
                                            alt="" />
                                    </div> */}

                                    <section className="card-body row px-4 column-gap-4 row-gap-3">
                                        {/* <article className="card col-md text-bg-dark border-0 rounded">
                                            <img src="../images/background.jpeg" className="card-img object-fit-cover" style={{ maxHeight: '125px' }} alt="..." />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between align-items-start px-2 pt-2 h-50">
                                                    <span className="bg-secondary opacity-50 px-1 rounded z-2"><small>Free</small></span>
                                                    <span className="mb-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                            <path
                                                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                        </svg>
                                                    </span>
                                                </div>
                                        
                                                <div className="d-flex column-gap-3 px-2 pb-3 h-50" style={{ background: '#256d7c26' }}>
                                                    <div className="d-flex align-items-end">
                                                        <img src="../images/photo.jpeg" alt="" width="70" height="70"
                                                            className="z-1 object-fit-cover border border-light border-3 rounded-circle" />
                                                        <span className="z-2 bg-success p-1 border border-light border-1 rounded-circle"
                                                            style={{ width: '10px', height: '10px', marginLeft: '-17px', marginBottom: '5px' }}></span>
                                                    </div>
                                                    <div className="text-light d-flex flex-column justify-content-center">
                                                        <h4 className="fs-6">Raylan</h4>
                                                        <span style={{ marginTop: '-14px' }}><small>@goalgoddess</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="card col-md text-bg-dark border-0 rounded">
                                            <img src="../images/background.jpeg" className="card-img object-fit-cover" style={{ maxHeight: '125px' }} alt="..." />
                                            <div className="card-img-overlay">
                                                <div className="d-flex justify-content-between align-items-start px-2 pt-2 h-50">
                                                    <span className="bg-secondary opacity-50 px-1 rounded z-2"><small>Free</small></span>
                                                    <span className="mb-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                            <path
                                                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                        </svg>
                                                    </span>
                                                </div>
                                        
                                                <div className="d-flex column-gap-3 px-2 pb-3 h-50" style={{ background: '#256d7c26' }}>
                                                    <div className="d-flex align-items-end">
                                                        <img src="../images/photo.jpeg" alt="" width="70" height="70"
                                                            className="z-1 object-fit-cover border border-light border-3 rounded-circle" />
                                                        <span className="z-2 bg-success p-1 border border-light border-1 rounded-circle"
                                                            style={{ width: '10px', height: '10px', marginLeft: '-17px', marginBottom: '5px' }}></span>
                                                    </div>
                                                    <div className="text-light d-flex flex-column justify-content-center">
                                                        <h4 className="fs-6">Raylan</h4>
                                                        <span style={{ marginTop: '-14px' }}><small>@goalgoddess</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article> */}
                                    </section>

                                    <section className="px-2 d-flex justify-content-between align-items-center">

                                        <div className="mb-2 d-flex justify-content-start align-items-center column-gap-3">

                                            <span className='like-section'>
                                                <button 
                                                    href="" 
                                                    type='button' 
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#likeModal" 
                                                    data-bs-body={ `@${post.user.username}` }
                                                    className="text-decoration-none text-secondary d-flex align-items-center border-0 bg-transparent">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                </button>

                                                <div className="modal fade" id="likeModal" tabIndex="-1" aria-labelledby="likeModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title fs-5 fw-semibold" id="likeModalLabel">Like on post</h4>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form onSubmit={ likePost }>
                                                                    <div className="d-none">
                                                                        <input 
                                                                            type="text" 
                                                                            name="user_id" 
                                                                            id="user_id" 
                                                                            defaultValue={ user?.id } 
                                                                            hidden="hidden" />
                                                                        <input 
                                                                            type="text" 
                                                                            name="post_id" 
                                                                            id="post_id" 
                                                                            defaultValue={ post?.id } 
                                                                            hidden="hidden" />
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <button 
                                                                            href="" 
                                                                            type='submit' 
                                                                            data-bs-toggle="modal" 
                                                                            data-bs-target="#likeModal" 
                                                                            data-bs-body={ `@${post.user.username}` }
                                                                            className="text-decoration-none text-secondary d-flex align-items-center border-0 bg-transparent">
                                                                                <span>Like Post</span>&nbsp;
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#820303" className="bi bi-heart"
                                                                                    viewBox="0 0 16 16">
                                                                                    <path
                                                                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                                                </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                            <hr />

                                                            <div>
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title fs-6 fw-semibold" id="likeModalLabel">Likes on post</h4>
                                                                    <small className='fw-semibold'>{ post?.likes?.length } likes</small>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div>
                                                                        {(post?.likes?.length > 0) ? post?.likes.map(like => {
                                                                            return (
                                                                                <div 
                                                                                    key={ like.id } 
                                                                                    className='border-bottom d-flex flex-column'>
                                                                                    <span>{ like?.user_id }</span>
                                                                                    <span className='align-self-end'>on {dayjs(like.created_at).format('MMM D, YYYY HH:mm')}</span>
                                                                                    
                                                                                </div>
                                                                            )}) : (
                                                                                <div>
                                                                                    <span>No likes</span>
                                                                                </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className='comment-section'>
                                                <button 
                                                    href="" 
                                                    type='button' 
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#commentModal" 
                                                    data-bs-body={ `@${post.user.username}` }
                                                    className="text-decoration-none text-secondary d-flex align-items-center border-0 bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                                    </svg>
                                                </button>

                                                <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title fs-5 fw-semibold" id="commentModalLabel">Comment on post</h4>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form onSubmit={ commentOnPost }>
                                                                    <div className="d-none">
                                                                        <input 
                                                                            type="text" 
                                                                            name="user_id" 
                                                                            id="user_id" 
                                                                            defaultValue={ user?.id } 
                                                                            hidden="hidden" />
                                                                        <input 
                                                                            type="text" 
                                                                            name="post_id" 
                                                                            id="post_id" 
                                                                            defaultValue={ post?.id } 
                                                                            hidden="hidden" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <textarea 
                                                                            name="body" 
                                                                            id="body" 
                                                                            placeholder={` Nice post @${post.user.username} ...`} 
                                                                            aria-label="Comment body"
                                                                            className="form-control"></textarea>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <button type="submit" className="btn btn-sm btn-faansy-red text-light">Comment</button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                            <hr />

                                                            <div>
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title fs-6 fw-semibold" id="commentModalLabel">Comments on post</h4>
                                                                    <small className='fw-semibold'>{ post?.comments?.length } comments</small>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div>
                                                                        {(post?.comments?.length > 0) ? post?.comments.map(comment => {
                                                                            return (
                                                                                <div 
                                                                                    key={ comment.id } 
                                                                                    className='border-bottom d-flex flex-column'>
                                                                                    <span>{ comment?.body }</span>
                                                                                    <span className='align-self-end'>by { comment?.user_id } on {dayjs(comment.created_at).format('MMM D, YYYY HH:mm')}</span>
                                                                                    
                                                                                </div>
                                                                            )}) : (
                                                                                <div>
                                                                                    <span>No comments</span>
                                                                                </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className='tip-section'>
                                                <button 
                                                    href="" 
                                                    type='button' 
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#tipModal" 
                                                    data-bs-body={ `@${post.user.username}` }
                                                    className="text-decoration-none text-secondary d-flex align-items-center border-0 bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                                                    </svg>
                                                    <span className="text-uppercase">Send Tip</span>
                                                </button>

                                                <div className="modal fade" id="tipModal" tabIndex="-1" aria-labelledby="tipModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title fs-5 fw-semibold" id="tipModalLabel">Specify Amount (in units only)</h4>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form onSubmit={ sendTip }>
                                                                    <div className="d-none">
                                                                        <input 
                                                                            type="text" 
                                                                            name="creator_id" 
                                                                            id="creator_id" 
                                                                            defaultValue={ post.user?.id } 
                                                                            hidden="hidden" />
                                                                        <input 
                                                                            type="text" 
                                                                            name="subscriber_id" 
                                                                            id="subscriber_id" 
                                                                            defaultValue={ user?.id } 
                                                                            hidden="hidden" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <textarea 
                                                                            name="amount" 
                                                                            id="amount" 
                                                                            placeholder='e.g. 20.50' 
                                                                            aria-label="Tip amount"
                                                                            className="form-control"></textarea>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <button type="submit" className="btn btn-sm btn-faansy-red text-light">Tip</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                        </div>

                                        <div>
                                            <form onSubmit={ addBookmark }>
                                                <input 
                                                    type="text" 
                                                    name="user_id" 
                                                    id="user_id" 
                                                    defaultValue={ user?.id } 
                                                    hidden="hidden" />
                                                <input 
                                                    type="text" 
                                                    name="post_id" 
                                                    id="post_id" 
                                                    defaultValue={ post?.id } 
                                                    hidden="hidden" />
                                                <button 
                                                    type='submit'
                                                    href="" 
                                                    className="text-decoration-none text-secondary d-flex align-items-center border-0 bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>

                                    </section>

                                    <section className="px-3 d-flex gap-3">
                                        <span><span className="fw-semibold">{ post?.likes?.length }</span>{ (post?.likes?.length > 1) ? ' likes' : ' like' }</span>
                                        <span><span className="fw-semibold">{ post?.comments?.length }</span>{ (post?.comments?.length > 1) ? ' comments' : ' comment' }</span>
                                    </section>
                                </article>
                            )
                        }) : (
                            <div className="d-flex justify-content-center my-5">
                                <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        
                    </section>
                </div>

            </section>
        </Layout>
    )
}
