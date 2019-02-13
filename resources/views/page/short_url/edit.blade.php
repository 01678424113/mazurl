@extends('layouts.app-2')

@section('content')
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
                <div class="x_content">
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">
                                    <h2>Cập nhật Short URL</h2>
                                    <ul class="nav navbar-right panel_toolbox">
                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <br/>
                                    <form action="{{ route('short-url.update', $model->id) }}" method="post"
                                          class="form-horizontal form-label-left">
                                        @csrf
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                @include('layouts.components.form-html.input-text', [
                                                    'label' => 'Root URL',
                                                    'name' => 'root_url',
                                                    'is_required' => true,
                                                    'value' => $model->root_url
                                                ])
                                                @include('layouts.components.form-html.input-text', [
                                                   'label' => 'View',
                                                   'name' => 'view',
                                                   'is_required' => true,
                                                   'value' => $model->view
                                               ])
                                                @include('layouts.components.form-html.input-text', [
                                                  'label' => 'Money',
                                                  'name' => 'money',
                                                  'is_required' => false,
                                                  'value' => number_format($model->money)
                                              ])
                                                @include('layouts.components.form-html.input-text', [
                                                'label' => 'Title',
                                                'name' => 'title',
                                                'is_required' => true,
                                                'value' => $model->view
                                            ])
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                @include('layouts.components.form-html.textarea', [
                                                  'label' => 'Description',
                                                  'name' => 'description',
                                                  'is_required' => true,
                                                  'value' => $model->view
                                              ])
                                                <div class="form-group">
                                                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="">
                                                        Trạng thái
                                                    </label>
                                                    <div class="col-md-9 col-sm-9 col-xs-12">
                                                        <input type="checkbox" id="" name="status"
                                                               @if($model->status ?? '') checked @endif class=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ln_solid"></div>
                                        <div class="form-group">
                                            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <a href="{{ route('short-url.index') }}" class="btn btn-primary">Quay
                                                    lại</a>
                                                <button type="submit" name="btnSubmit" class="btn btn-success">Lưu thay
                                                    đổi
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
