<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotFoundController extends Controller
{
    public function index()
    {
        return Inertia::render("NotFound");
    }
}
