<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function __construct()
    {
        $this->route_names = [
            'forgot.sendMail',
            'forgot.resetPassword',
            'home',
            'user-admin.index',
            'user-admin.show',
            'user-admin.create',
            'user-admin.store',
            'user-admin.edit',
            'user-admin.update',
            'user-admin.destroy',
            'short-url.index',
            'short-url.show',
            'short-url.create',
            'short-url.store',
            'short-url.edit',
            'short-url.update',
            'short-url.destroy',
            'permission.index',
            'permission.show',
            'permission.create',
            'permission.store',
            'permission.edit',
            'permission.update',
            'permission.destroy',
            'role.index',
            'role.show',
            'role.create',
            'role.store',
            'role.edit',
            'role.update',
            'role.destroy',
        ];

    }
}
