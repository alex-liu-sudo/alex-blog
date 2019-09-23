@servers(['web' => 'my_cloud'])

@task('dev-deploy')
    cd /data/wwwroot/shop
    git pull origin dev
@endtask
