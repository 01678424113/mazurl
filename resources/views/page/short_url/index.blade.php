@extends('layouts.app-2')

@section('content')
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
                <div class="x_title">
                    <h2>Danh sách Short URL </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Page 1</a>
                                </li>
                                <li><a href="#">Page 2</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <table id="datatable" style="width:100%" class="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Root URL</th>
                            <th>ID URL</th>
                            <th>View</th>
                            <th>Money</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php $i = 1; ?>
                        @foreach($data as $item)
                            <tr>
                                <td>{{ $i }}</td>
                                <td><a target="_blank" href="{{ $item->root_url }}">View link</a></td>
                                <td>{{ $item->id_url }}</td>
                                <td>{{ $item->view }}</td>
                                <td>{{ (!empty($item->amount) ? $item->amount : 0) }}</td>
                                <td>
                                    <div class="">
                                        <label>
                                            <input type="checkbox" disabled class="" @if($item->status ?? '') checked @endif/>
                                        </label>
                                    </div>

                                </td>
                                <td>
                                    <a href="{{ route('short-url.edit', $item->id) }}" class="btn btn-xs btn-info"><i
                                                class="fa fa-pencil"></i></a>
                                    <a href="{{ route('short-url.destroy', $item->id) }}" class="btn btn-xs btn-danger"><i
                                                class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            <?php $i++ ?>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
