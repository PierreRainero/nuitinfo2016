<?php

namespace walkingcodeBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class walkingcodeBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }

}
