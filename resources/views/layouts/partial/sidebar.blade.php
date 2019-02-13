<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
        <h3>Temaz Media</h3>
        <ul class="nav side-menu">
            <li><a href="{{ route('home') }}"><i class="fa fa-dashboard"></i> Trang chủ </a></li>
            @if(isset($route_name_user))

                @if(in_array('user-admin.index',$route_name_user))
                    <li>
                        <a href="javascript:;">
                            <i class="fa fa-user"></i> Quản lý tài khoản <span class="fa fa-chevron-down"></span>
                        </a>
                        <ul class="nav child_menu">
                            @if(in_array('user-admin.index',$route_name_user))
                                <li><a href="{{ route('user-admin.index') }}">Danh sách tài khoản</a></li>
                            @endif
                            @if(in_array('user-admin.create',$route_name_user))
                                <li><a href="{{ route('user-admin.create') }}">Tạo mới tài khoản</a></li>
                            @endif
                        </ul>
                    </li>
                @endif
                @if(in_array('role.index',$route_name_user))
                    <li>
                        <a href="javascript:;">
                            <i class="fa fa-group"></i> Phân quyền admin<span class="fa fa-chevron-down"></span>
                        </a>
                        <ul class="nav child_menu">
                            @if(in_array('role.index',$route_name_user))
                                <li><a href="{{ route('role.index') }}">Vai trò</a></li>
                            @endif
                            @if(in_array('permission.index',$route_name_user))
                                <li><a href="{{ route('permission.index') }}">Quyền</a></li>
                            @endif
                        </ul>
                    </li>
                @endif
                @if(in_array('role.index',$route_name_user))
                    <li>
                        <a href="javascript:;">
                            <i class="fa fa-group"></i> Quản lý Short Url<span class="fa fa-chevron-down"></span>
                        </a>
                        <ul class="nav child_menu">
                            @if(in_array('short-url.index',$route_name_user))
                                <li><a href="{{ route('short-url.index') }}">Danh sách</a></li>
                            @endif
                            @if(in_array('short-url.index',$route_name_user))
                                <li><a href="{{ route('short-url.index') }}">My Short Url</a></li>
                            @endif
                        </ul>
                    </li>
                @endif
            @endif
        </ul>
    </div>
</div>
