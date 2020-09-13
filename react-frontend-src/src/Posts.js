import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './Posts.css';

class Posts extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			posts: [],
			postText: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitPost = this.submitPost.bind(this);
	}
	
	async componentDidMount() {
		const req = await fetch(`http://localhost:3000/api/post`)
		const res = await req.json()
		console.log(res)
		this.setState({
			isLoaded: true,
			posts: res
		});
	}


	handleChange(event) {
		this.setState({postText: event.target.value});
	}


	async submitPost(){
		const res = await fetch(`http://localhost:3000/api/post/create`, {
			method: "POST",
			mode: "cors",
			headers: { 
				"Content-Type": "application/json" 
			},
			body: JSON.stringify(
				{Post: {
					post: this.state.postText
				}
			})
		})
		const json = await res.json()

		
		let newPosts = this.state.posts
		newPosts.push(json)

		this.setState({ posts: newPosts, postText: ""});
	}


	async deletePost(id){
		const res = await fetch(`http://localhost:3000/api/post/delete/${id}`, {
			method: "POST", // Could also be delete. CORS issues /shrug
			mode: "cors"
		})
		if(res.status == 200){
			const newPosts = this.state.posts.filter(p => p.id != id)
			this.setState({ posts: newPosts });
		}
	}
	
	
	render() {
		const { isLoaded, posts, postText } = this.state;

		if(!isLoaded){
			return (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)
		}
		return (
			<div>
				<h1> Posts </h1>
				<div className="Posts">
					{posts.map(p => (
						<div className="Post" key={p.id}>
							<button type="button" className="close" aria-label="Close" onClick={(e) => this.deletePost(p.id)}>
								<span aria-hidden="true">&times;</span>
							</button>
							<p>
								{p.post}
							</p>
						</div>
					))}
				</div>
				<br/>
				<div className="addForm">
					<h4>Add a Post</h4>
					<textarea value={postText} onChange={this.handleChange}></textarea>
					<br/>
					<Button variant="dark" onClick={this.submitPost}>Submit Post</Button>
				</div>
			</div>
		);
	}
			
}
export default Posts;
		