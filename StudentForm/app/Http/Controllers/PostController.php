<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return view('add-blog-post-form');
    }
    public function store(Request $request)
    {
        $post = new Post;
        $post->name = $request->name;
        $post->email = $request->email;
        $post->school = $request->school;
        $post->save();
        return redirect('add-blog-post-form')->with('status', 'Blog Post Form Data Has Been inserted');
    }
}
