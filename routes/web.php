<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('posts', function () {
        return Inertia::render('posts');
    })->name('posts');

    Route::get('fields', function () {
        return Inertia::render('fields');
    })->name('fields');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
