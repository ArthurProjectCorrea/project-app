<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class VueCreate extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'make:vue {name}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create a new Vue file';

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    $filename = $this->argument('name');

    $path = resource_path("vue/{$filename}.vue");

    if (File::exists($path)) {
        $this->error('File already exists!');
        return 1;
    }

    File::ensureDirectoryExists(dirname($path));
    File::put($path, '');

    $this->info('File created successfully.');
    return 0;
  }
}
